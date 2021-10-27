import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import clsx from "clsx";

import { Link } from "react-scroll";

import { useStyles } from "../theme";
import { colors } from "../utilities/colors";
import ScrollRevealContainer from "../components/ScrollRevealContainer";

function Header() {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={clsx(classes.headerContainer)}
      >
        <Grid item>
          <ScrollRevealContainer>
            <Typography variant="subtitle1" color={colors.lightGrey}>
              Frontend Developer & Product Manager
            </Typography>
          </ScrollRevealContainer>

          <ScrollRevealContainer>
            <Typography variant={matches ? "h3" : "h1"} gutterBottom>
              Hi, I'm Arifayan Idowu.O
            </Typography>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Typography
              variant="subtitle1"
              color={colors.lightPurpleText}
              gutterBottom
            >
              I build amazing products using modern technologies as well as
              adopting best practices.
            </Typography>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Link
              to="codecenter"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={classes.link2}
            >
              Check out my work below.
            </Link>
          </ScrollRevealContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
