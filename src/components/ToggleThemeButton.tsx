import { Fab, useScrollTrigger } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";

import { useStyles } from "../theme";

type Props = {
  toggleTheme: any;
  type: string | any;
};

const ToggleThemeButton = ({ toggleTheme, type }: Props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  const transition = (delay = 0.5) => ({
    type: "spring",
    stiffness: 200,
    damping: 30,
    duration: 5,
    delay,
    ease: "easeOut",
  });

  const slideOutVariants = {
    visible: (trigger: boolean) => ({
      x: trigger ? -60 : 0,
      opacity: trigger ? 1 : 0,
      transition,
    }),
  };

  const arrowAnimation = {
    visible: (trigger: boolean) => ({
      x: trigger ? 0 : -80,
      opacity: trigger ? 1 : 0,
      transition: transition(0.3),
    }),
  };

  return (
    <AnimatePresence>
      <div className={classes.themeBtnAbsolute}>
        <motion.div
          custom={trigger}
          animate="visible"
          variants={slideOutVariants}
          style={{
            position: "absolute",
          }}
        >
          <Fab
            onClick={handleScrollTop}
            sx={{
              overflow: "hidden",
              color: "#fff",
              transition: "all 900ms ease-in",
              backgroundColor: "#3636ac",
              backgroundImage:
                "linear-gradient(129deg, #3636ac 0%, #430745 100%)",
              "&:hover": {
                background: "linear-gradient(129deg, #3636a1 0%, #630b66 100%)",
              },
            }}
            size="medium"
            aria-label="Scroll to top"
          >
            <motion.div
              custom={trigger}
              variants={arrowAnimation}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
              }}
            >
              <ArrowUpwardIcon />
            </motion.div>
          </Fab>
        </motion.div>
        <Fab
          onClick={toggleTheme}
          sx={{
            transition: "all 900ms ease-in",
            background:
              type === "dark"
                ? "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)"
                : "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
            color: "#fff",
            "&:hover": {
              background:
                type === "dark"
                  ? "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)"
                  : "linear-gradient(90deg, #c92a5f 0%, #b9913b 100%)",
            },
          }}
          size="medium"
          aria-label="Toggle light/dark theme"
        >
          {type === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </Fab>
      </div>
    </AnimatePresence>
  );
};

export default ToggleThemeButton;
