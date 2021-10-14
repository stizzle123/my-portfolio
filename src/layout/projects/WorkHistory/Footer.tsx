import { useEffect } from "react";
import { Typography } from "@mui/material";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TelegramIcon from "@mui/icons-material/Telegram";

import AnimButton from "../../../components/AnimButton";
import useResponsive from "../../../hooks/useResponsive";

const Footer = () => {
  const [matches] = useResponsive();
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
          marginTop: 130,
          marginBottom: 130,
          textAlign: "center",
          width: "100%",
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
            variant="h3"
            sx={{
              width: matches ? "100%" : 400,
              margin: "20px auto",
            }}
          >
            Let's build something amazing together
          </Typography>
        </motion.div>
        <motion.a
          href="mailto:arifayanidowu@gmail.com?subject=I've%20got%20a%20job%20for%20you"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "30px auto",
            width: "fit-content",
          }}
          custom={1}
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
        >
          <AnimButton
            sx={{
              margin: "0 auto",
            }}
            variant="contained"
            color="error"
            endIcon={<TelegramIcon />}
          >
            Send me a mail
          </AnimButton>
        </motion.a>
      </div>
    </AnimatePresence>
  );
};

export default Footer;
