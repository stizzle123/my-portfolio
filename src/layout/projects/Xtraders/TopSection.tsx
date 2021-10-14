import { useEffect } from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useStyles } from "../../../theme";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";
import useResponsive from "../../../hooks/useResponsive";
import Overlay from "../../../components/Overlay";

const TopSection = () => {
  const classes = useStyles();
  const { ref, start, end } = useRefScrollProgress();
  const [matches] = useResponsive();
  const controls = useAnimation();
  const { inView, ref: refObj } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 100,
          delay: i * 0.3,
        },
      }));
    }
  }, [inView, controls]);

  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(
    scrollYProgress,
    //@ts-ignore
    [start, end],
    [0, 1]
  );

  return (
    <AnimatePresence>
      <div ref={ref}>
        <motion.div className={clsx(classes.xtradersContainer)} ref={refObj}>
          <Overlay {...{ opacity }} />
          <div
            style={{
              position: "absolute",
              zIndex: 3,
              top: "20%",
            }}
          >
            <motion.div
              custom={0}
              initial={{ y: 20, opacity: 0 }}
              animate={controls}
            >
              <Typography
                variant={matches ? "h3" : "h2"}
                sx={{
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
                gutterBottom
              >
                XTraders
              </Typography>
            </motion.div>
            <motion.div
              custom={1}
              initial={{ y: 20, opacity: 0 }}
              animate={controls}
            >
              <Typography
                className={classes.lightPurpleText}
                sx={{ width: matches ? "100%" : 600 }}
              >
                Xtraders is a product trading and reviewing platform, that
                allows users to upload items, which will be viewed by users
                within your geolocation. Products can be commented on by users,
                and also traded with interested parties.
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
