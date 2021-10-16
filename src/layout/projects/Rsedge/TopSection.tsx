import { Typography } from "@mui/material";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

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
    [0.8, 1]
  );

  return (
    <AnimatePresence>
      <div ref={ref}>
        <motion.div className={clsx(classes.rsedgeContainer)}>
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
                RS EDGE
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
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
            </ScrollRevealContainer>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
