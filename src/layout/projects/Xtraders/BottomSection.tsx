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
import { ThemeType } from "../../../types";

const BottomSection = ({ type }: ThemeType) => {
  const classes = useStyles();

  const [matches] = useResponsive();
  const controls = useAnimation();
  const controls2 = useAnimation();

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
  }, [controls, inView, controls2]);

  return (
    <AnimatePresence>
      <div className={clsx(classes.container)} ref={ref}>
        <Grid
          container
          direction={matches ? "column-reverse" : "row"}
          spacing={5}
        >
          <Grid item md={6} sm={12}>
            <div className={classes.imgAbsolute}>
              <motion.img
                src={"/img/xtraders.png"}
                alt="xtraders"
                srcSet={"/img/xtraders.png 2x"}
                className={clsx(classes.imgWrapper)}
                animate={controls}
                draggable={false}
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div className={classes.mt60}>
              <Typography
                variant={matches ? "h3" : "h2"}
                sx={{
                  fontWeight: 800,
                  letterSpacing: 2,
                  width: matches ? "100%" : 400,
                  textTransform: "capitalize",
                  color: type === "light" ? colors.darkbrown : colors.white,
                }}
                gutterBottom
              >
                Product management like never before
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: colors.lightPurpleText,
                }}
              >
                XTraders was built with a modern UI approach in mind using
                Material UI and ReactJS, the project presented here is a demo
                but in likeness to the original project which can't be displayed
                here for legal reasons.
              </Typography>
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
              <a
                href="https://xtraders.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <AnimButton variant="contained" endIcon={<ArrowRightAltIcon />}>
                  Explore
                </AnimButton>
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: matches ? 20 : 100 }}>
          <Grid item xs={12} md={6}>
            <div>
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
              <Typography
                gutterBottom
                sx={{
                  color: colors.lightPurpleText,
                }}
              >
                The interface was designed with the intention to make it easy
                for users to filter through product list items as well as create
                products while on the same page. Items rendered on this page
                leverages geolocation by default, using a 200 metre radius from
                your current position.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <InView>
              {({ ref, inView }) => (
                <div style={{ position: "relative" }}>
                  <motion.img
                    src={"/img/xtraders-prod.png"}
                    alt="xtraders2"
                    srcSet={"/img/xtraders-prod.png 2x"}
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
                  />
                </div>
              )}
            </InView>
          </Grid>
        </Grid>
      </div>
    </AnimatePresence>
  );
};

export default BottomSection;
