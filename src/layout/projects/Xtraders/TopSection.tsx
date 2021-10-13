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

const TopSection = () => {
  const classes = useStyles();
  const { start, end, ref } = useRefScrollProgress();
  const [matches] = useResponsive();

  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(
    scrollYProgress,
    //@ts-ignore
    [start, end],
    [0, 1]
  );

  const spring = {
    type: "spring",
    damping: 600,
    stiffness: 300,
  };

  return (
    <AnimatePresence>
      <motion.div className={clsx(classes.xtradersContainer)} ref={ref}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          style={{
            opacity: opacity ? opacity : 1,
          }}
          className={classes.overlay}
          transition={spring}
        />
        <div
          style={{
            position: "absolute",
            zIndex: 3,
            top: "20%",
          }}
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
          <Typography
            className={classes.lightPurpleText}
            sx={{ width: matches ? "100%" : 600 }}
          >
            Xtraders is a product trading and reviewing platform, that allows
            users to upload items, which will be viewed by users within your
            geolocation. Products can be commented on by users, and also traded
            with interested parties.
          </Typography>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopSection;
