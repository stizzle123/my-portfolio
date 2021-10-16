import { Typography } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import clsx from "clsx";

import { useStyles } from "../../../theme";
import useResponsive from "../../../hooks/useResponsive";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";
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
    [0.5, 1]
  );

  return (
    <AnimatePresence>
      <div ref={ref}>
        <motion.div className={clsx(classes.codecenterContainer)}>
          <Overlay {...{ opacity }} />
          <motion.div style={{ position: "absolute", zIndex: 3, top: "20%" }}>
            <ScrollRevealContainer>
              <Typography
                variant={matches ? "h3" : "h2"}
                sx={{
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
                gutterBottom
              >
                The Code Center
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <Typography
                className={classes.lightPurpleText}
                sx={{ width: matches ? "100%" : 600 }}
              >
                The Code Center is a bootcamp located in Lagos, Nigeria, founded
                to help educate brilliant minds on the benefits of technology,
                building them into valuable assets to the society and to
                themselves.
              </Typography>
            </ScrollRevealContainer>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
