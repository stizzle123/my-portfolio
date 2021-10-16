import { Typography } from "@mui/material";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

import { useStyles } from "../../../theme";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";
import useResponsive from "../../../hooks/useResponsive";
import Overlay from "../../../components/Overlay";
import ScrollRevealContainer from "../../../components/ScrollRevealContainer";

const TopSection = () => {
  const classes = useStyles();
  const { ref, start, end } = useRefScrollProgress();
  const [matches] = useResponsive();

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
        <motion.div className={clsx(classes.xtradersContainer)}>
          <Overlay {...{ opacity }} />
          <div
            style={{
              position: "absolute",
              zIndex: 3,
              top: "20%",
            }}
          >
            <ScrollRevealContainer>
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
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <Typography
                className={classes.lightPurpleText}
                sx={{ width: matches ? "100%" : 600 }}
              >
                Xtraders is a product trading and reviewing platform, that
                allows users to upload items, which will be viewed by users
                within your geolocation. Products can be commented on by users,
                and also traded with interested parties.
              </Typography>
            </ScrollRevealContainer>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
