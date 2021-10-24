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
        <motion.div className={clsx(classes.germinyContainer)}>
          <Overlay {...{ opacity }} />
          <div style={{ position: "absolute", zIndex: 3, top: "20%" }}>
            <ScrollRevealContainer>
              <Typography
                variant={matches ? "h3" : "h2"}
                sx={{
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
                gutterBottom
              >
                Germiny
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <Typography
                className={classes.lightPurpleText}
                sx={{ width: matches ? "100%" : 600 }}
              >
                Germiny is a platform that provides easy access to medical care
                by leveraging the power of technology. Providing jobs for
                medical practitioners where they can make money at their spare
                time.
              </Typography>
            </ScrollRevealContainer>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
