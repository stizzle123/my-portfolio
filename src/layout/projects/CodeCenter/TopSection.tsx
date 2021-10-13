import { Typography } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

import { useStyles } from "../../../theme";
import useResponsive from "../../../hooks/useResponsive";
import useRefScrollProgress from "../../../hooks/useRefScrollProgress";
import clsx from "clsx";

const TopSection = () => {
  const classes = useStyles();
  const { start, end, ref } = useRefScrollProgress();

  const [matches] = useResponsive();

  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(
    scrollYProgress,
    //@ts-ignore
    [start, end],
    [0.5, 1]
  );

  const spring = {
    type: "spring",
    damping: 600,
    stiffness: 300,
  };

  return (
    <AnimatePresence>
      <motion.div className={clsx(classes.codecenterContainer)} ref={ref}>
        <motion.div
          style={{
            opacity: opacity ? opacity : 1,
          }}
          className={classes.overlay}
          transition={spring}
        />
        <div style={{ position: "absolute", zIndex: 3, top: "20%" }}>
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
          <Typography
            className={classes.lightPurpleText}
            sx={{ width: matches ? "100%" : 600 }}
          >
            The Code Center is a bootcamp located in Lagos, Nigeria, founded to
            help educate brilliant minds on the benefits of technology, building
            them into valuable assets to the society and to themselves.
          </Typography>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopSection;
