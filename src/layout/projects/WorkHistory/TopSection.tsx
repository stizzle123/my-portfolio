import { Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import useResponsive from "../../../hooks/useResponsive";
import { useStyles } from "../../../theme";
import ScrollRevealContainer from "../../../components/ScrollRevealContainer";

const TopSection = () => {
  const [matches] = useResponsive();
  const classes = useStyles();

  return (
    <AnimatePresence>
      <div
        style={{
          height: matches ? "100%" : "50vh",
          marginBottom: matches ? 50 : 0,
        }}
      >
        <ScrollRevealContainer>
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
        </ScrollRevealContainer>
        <ScrollRevealContainer>
          <a
            className={classes.link2}
            href="mailto:arifayanidowu@gmail.com?subject=I've%20got%20a%20job%20for%20you"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 15, display: "flex", width: "fit-content" }}
          >
            Get in touch
            <ArrowRightAltIcon />
          </a>
        </ScrollRevealContainer>
      </div>
    </AnimatePresence>
  );
};

export default TopSection;
