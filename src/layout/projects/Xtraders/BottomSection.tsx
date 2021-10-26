import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import clsx from "clsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

import AnimButton from "../../../components/AnimButton";
import useResponsive from "../../../hooks/useResponsive";
import { useStyles } from "../../../theme";
import { colors } from "../../../utilities/colors";
import ScrollRevealContainer from "../../../components/ScrollRevealContainer";

const BottomSection = () => {
  const classes = useStyles();

  const [matches] = useResponsive();
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: -20,
        transition: { duration: 3, stiffness: 100, damping: 10 },
      });
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <div
        className={clsx(classes.container)}
        ref={ref}
        style={{
          paddingBottom: matches ? 100 : 110,
        }}
      >
        <Grid
          container
          direction={matches ? "column-reverse" : "row"}
          spacing={5}
        >
          <Grid item md={6} sm={12}>
            <div className={classes.imgAbsolute}>
              <motion.img
                src={`/img/xtraders.webp`}
                alt="xtraders"
                className={clsx(classes.imgWrapper)}
                animate={controls}
                draggable={false}
                loading="lazy"
                width="100"
                height="110%"
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div className={classes.mt60}>
              <ScrollRevealContainer>
                <Typography
                  variant={matches ? "h3" : "h2"}
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 2,
                    width: matches ? "100%" : 400,
                    textTransform: "capitalize",
                  }}
                  gutterBottom
                >
                  Product management like never before
                </Typography>
              </ScrollRevealContainer>
              <ScrollRevealContainer>
                <Typography
                  gutterBottom
                  sx={{
                    color: colors.lightPurpleText,
                  }}
                >
                  XTraders was built with a modern UI approach in mind using
                  Material UI and ReactJS, the project presented here is a demo
                  but in likeness to the original project which can't be
                  displayed here for legal reasons.
                </Typography>
              </ScrollRevealContainer>
              <ScrollRevealContainer>
                <Typography
                  gutterBottom
                  sx={{
                    color: colors.lightPurpleText,
                    marginTop: 2,
                    marginBottom: 2,
                    display: "block",
                    textTransform: "uppercase",
                  }}
                  variant="caption"
                >
                  To check out the demo app
                </Typography>
              </ScrollRevealContainer>
              <ScrollRevealContainer>
                <a
                  href="https://xtraders.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "fit-content",
                    display: "inline-block",
                  }}
                >
                  <AnimButton
                    variant="contained"
                    endIcon={<ArrowRightAltIcon />}
                  >
                    Explore
                  </AnimButton>
                </a>
              </ScrollRevealContainer>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: matches ? 20 : 100 }}>
          <Grid item xs={12} md={6}>
            <div>
              <ScrollRevealContainer>
                <Typography
                  variant={matches ? "h3" : "h2"}
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 2,
                    width: matches ? "100%" : 400,
                    textTransform: "capitalize",
                  }}
                  gutterBottom
                >
                  Accessibility has never been so easy
                </Typography>
              </ScrollRevealContainer>
              <ScrollRevealContainer>
                <Typography
                  gutterBottom
                  sx={{
                    color: colors.lightPurpleText,
                  }}
                >
                  The interface was designed with the intention to make it easy
                  for users to filter through product list items as well as
                  create products while on the same page. Items rendered on this
                  page leverages geolocation by default, using a 200 metre
                  radius from your current position.
                </Typography>
              </ScrollRevealContainer>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <InView>
              {({ ref, inView }) => (
                <div style={{ position: "relative" }}>
                  <motion.img
                    src={`/img/xtraders-prod.webp`}
                    alt="xtraders2"
                    className={clsx(classes.imgWrapper)}
                    initial={{
                      y: -20,
                    }}
                    animate={
                      inView && {
                        y: 0,
                        transition: {
                          duration: 3,
                          stiffness: 100,
                          damping: 10,
                        },
                      }
                    }
                    ref={ref}
                    draggable={false}
                    loading="lazy"
                    width="100"
                    height="110%"
                  />
                </div>
              )}
            </InView>
          </Grid>
        </Grid>
        <ScrollRevealContainer>
          <a
            href="https://xtraders.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginTop: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimButton variant="contained">View Project</AnimButton>
          </a>
        </ScrollRevealContainer>
      </div>
    </AnimatePresence>
  );
};

export default BottomSection;
