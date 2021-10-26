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
        paddingBottom: matches ? 100 : 110,
      }}
      ref={ref}
    >
      <Grid
        container
        direction={matches ? "column-reverse" : "row"}
        spacing={5}
      >
        <Grid item md={6} sm={12}>
          <div className={classes.imgAbsolute}>
            <motion.img
              src={`/img/germiny.webp`}
              alt="germiny homepage"
              className={clsx(classes.imgWrapper)}
              animate={controls}
              draggable={false}
              loading="lazy"
              style={{
                borderWidth: 0,
              }}
              width="100"
              height="100%"
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
                Medicare at your fingertips
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <Typography
                gutterBottom
                sx={{
                  color: colors.lightPurpleText,
                }}
              >
                Germiny was built using ReactJS, Redux-toolkit, and Material-UI
                for the frontend while the backend was developed using NodeJS,
                Expressjs, Mongodb and so much more.
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
                To learn more about Germiny
              </Typography>
            </ScrollRevealContainer>
            <ScrollRevealContainer>
              <a
                href="https://germiny.org/"
                target="_blank"
                rel="noreferrer noopener"
                style={{ textDecoration: "none", color: "inherit" }}
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
                    src="/img/germiny-product.webp"
                    alt="germiny product page"
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 100 }}
      >
        <Grid item md={10} xs={12}>
          <ScrollRevealContainer>
            <Typography
              variant={matches ? "h3" : "h2"}
              sx={{
                fontWeight: 800,
                letterSpacing: 2,
                width: matches ? "100%" : 400,
                textTransform: "capitalize",
                margin: "10px auto",
              }}
              gutterBottom
              align="center"
            >
              Simplicity is the goal
            </Typography>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <Typography
              gutterBottom
              sx={{
                color: colors.lightPurpleText,
                width: matches ? "100%" : 600,
                margin: "auto",
                marginBottom: 5,
              }}
            >
              The UI was designed to ensure that every detail about what Germiny
              is about is captured at first glance. We aimed to keep it simple
              and informative at the same time.
            </Typography>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <img
              src="/img/germiny-about.webp"
              alt="Germiny about page"
              className={clsx(classes.imgWrapper)}
              loading="lazy"
              draggable={false}
              width="100"
              height="100%"
            />
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <a
              href="https://germiny.org/products"
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
        </Grid>
      </Grid>
    </div>
  );
};

export default BottomSection;
