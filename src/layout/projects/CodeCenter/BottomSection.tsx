import { useEffect } from "react";
import { Grid, Hidden, Typography } from "@mui/material";
import clsx from "clsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion, useAnimation } from "framer-motion";
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
    triggerOnce: false,
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
    <div
      className={clsx(classes.container)}
      style={{
        paddingBottom: matches ? 100 : 250,
      }}
      ref={ref}
    >
      <Grid
        container
        direction={matches ? "column-reverse" : "row"}
        spacing={5}
      >
        <Grid item md={6} sm={12}>
          <motion.img
            src={`/img/codecenter-lg-min.webp`}
            alt="codecenter"
            className={clsx(classes.imgWrapper, classes.imgAbsolute)}
            initial={{
              y: 0,
            }}
            animate={controls}
            draggable={false}
            loading="lazy"
            width="100"
            height="110%"
          />
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
                The Bootcamp for everyone.
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <Typography
                gutterBottom
                sx={{
                  color: colors.lightPurpleText,
                }}
              >
                This was one of my earliest projects, it was built using
                bootstrap as the UI library and sass as the css preprocessor. We
                had several options for design as at the time, but eventually
                settled for something simple and direct. PHP was used as the
                backend technology.
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
                To learn more about The Code Center
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <a
                href="https://thecodecenter.org/"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "fit-content",
                  display: "inline-block",
                }}
              >
                <AnimButton variant="contained" endIcon={<ArrowRightAltIcon />}>
                  Explore
                </AnimButton>
              </a>
            </ScrollRevealContainer>
            <Hidden smDown>
              <InView>
                {({ ref, inView }) => (
                  <motion.img
                    src={`/img/codecenter-lg-2.webp`}
                    alt="codecenter2"
                    className={clsx(classes.imgWrapper)}
                    style={{ marginTop: 100 }}
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
                    height="100%"
                  />
                )}
              </InView>
            </Hidden>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BottomSection;
