import { useRef } from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import {
  motion,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";
import { useStyles } from "../theme";
import { colors } from "../utilities/colors";

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const { scrollY } = useViewportScroll();

  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.5,
        delayChildren: 0.5,
        ease: "easeIn",
      },
    },
    exit: {
      y: 10,
      opacity: 0,
    },
  };
  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 60,
    ease: "easeOut",
  };

  const childVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: 50,
      opacity: 0,
      transition,
    },
  };

  const opacity = useTransform(
    scrollY,
    [0, ref?.current?.offsetHeight! / 2, ref?.current?.offsetHeight!],
    [0.8, 0.2, 0]
  );

  // const spring = {
  //   type: "spring",
  //   damping: 10,
  //   stiffness: 100,
  // };

  return (
    <AnimatePresence>
      <div ref={ref}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={clsx(classes.headerContainer)}
          style={{ overflow: "scroll" }}
        >
          <Grid item>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                opacity,
                overflow: "scroll",
              }}
              variants={parentVariants}
            >
              <motion.div variants={childVariants}>
                <Typography variant="subtitle2" color={colors.lightGrey}>
                  Frontend Developer & Product Manager
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography variant={matches ? "h3" : "h1"} gutterBottom>
                  Hi, I'm Arifayan Idowu.O
                </Typography>
              </motion.div>
              <motion.div variants={childVariants}>
                <Typography variant="subtitle1" color={colors.lightPurpleText}>
                  I build amazing products using modern technologies as well as
                  adopting best practices.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </AnimatePresence>
  );
}

export default Header;
