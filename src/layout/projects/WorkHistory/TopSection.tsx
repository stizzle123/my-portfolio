import { useEffect } from "react";
import { Typography } from "@mui/material";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import useResponsive from "../../../hooks/useResponsive";
import { useStyles } from "../../../theme";

const TopSection = () => {
  const [matches] = useResponsive();
  const classes = useStyles();
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

  return (
    <AnimatePresence>
      <div
        style={{
          height: matches ? "100%" : "50vh",
          marginBottom: matches ? 50 : 0,
        }}
        ref={refObj}
      >
        <motion.div
          custom={0}
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
        >
          <Typography
            gutterBottom
            variant={matches ? "h4" : "h3"}
            sx={{
              width: matches ? "100%" : 600,
              marginTop: 10,
            }}
          >
            I offer great value to companies looking to hire a frontend
            developer.
          </Typography>
        </motion.div>
        <motion.a
          className={classes.link2}
          href="mailto:arifayanidowu@gmail.com?subject=I've%20got%20a%20job%20for%20you"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 15, display: "flex", width: "fit-content" }}
          custom={1}
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
        >
          Get in touch
          <ArrowRightAltIcon />
        </motion.a>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
