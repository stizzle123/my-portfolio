import { Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import TelegramIcon from "@mui/icons-material/Telegram";

import AnimButton from "../../../components/AnimButton";
import useResponsive from "../../../hooks/useResponsive";
import ScrollRevealContainer from "../../../components/ScrollRevealContainer";

const Footer = () => {
  const [matches] = useResponsive();

  return (
    <AnimatePresence>
      <div
        style={{
          marginTop: 130,
          marginBottom: 130,
          textAlign: "center",
          width: "100%",
        }}
      >
        <ScrollRevealContainer>
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
        </ScrollRevealContainer>
        <ScrollRevealContainer>
          <a
            href="mailto:arifayanidowu@gmail.com?subject=I've%20got%20a%20job%20for%20you"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              display: "block",
              margin: "30px auto",
              width: "fit-content",
            }}
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
          </a>
        </ScrollRevealContainer>
      </div>
    </AnimatePresence>
  );
};

export default Footer;
