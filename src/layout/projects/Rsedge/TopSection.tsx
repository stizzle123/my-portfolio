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
import useResponsive from "../../../hooks/useResponsive";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";
import Overlay from "../../../components/Overlay";

const TopSection = () => {
  const classes = useStyles();
  const { ref, start, end } = useRefScrollProgress();
  const { inView, ref: refObj } = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();

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

  const [matches] = useResponsive();

  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(
    scrollYProgress,
    //@ts-ignore
    [start, end],
    [0.8, 1]
  );

  return (
    <AnimatePresence>
      <div ref={ref}>
        <motion.div className={clsx(classes.rsedgeContainer)} ref={refObj}>
          <Overlay {...{ opacity }} />
          <div style={{ position: "absolute", zIndex: 3, top: "20%" }}>
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
                RS EDGE
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
                RS EDGE is an enterprise resource planning application built
                specifically to suit the needs of Russelsmith Nigeria. An oil
                and gas firm located in Lagos. This platform allows users to
                make requisitions, budgets, inventory, user management and many
                more.
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
