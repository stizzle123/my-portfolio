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

const BottomSection = () => {
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
    <div
      className={clsx(classes.container)}
      style={{
        paddingBottom: matches ? 0 : 200,
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
            src="/img/germiny-sm.png"
            alt="germiny home"
            srcSet="/img/germiny.png 2x"
            className={clsx(classes.imgWrapper, classes.imgAbsolute)}
            animate={controls}
            draggable={false}
            style={{
              borderWidth: 0,
            }}
          />
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
                color: colors.darkbrown,
              }}
              gutterBottom
            >
              Medicare at your fingertips
            </Typography>
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
            <Hidden smDown>
              <InView>
                {({ ref, inView }) => (
                  <motion.img
                    src="/img/germiny-product-sm.png"
                    alt="germiny product"
                    srcSet="/img/germiny-product.png 2x"
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
          <Typography
            variant={matches ? "h3" : "h2"}
            sx={{
              fontWeight: 800,
              letterSpacing: 2,
              width: matches ? "100%" : 400,
              textTransform: "capitalize",
              color: colors.darkbrown,
              margin: "10px auto",
            }}
            gutterBottom
            align="center"
          >
            Simplicity is the goal
          </Typography>
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
            is about is captured at first glance. We aimed to keep it simple and
            informative at the same time.
          </Typography>
          <img
            src="/img/germiny-about-sm.png"
            srcSet="/img/germiny-about.png 2x"
            alt="Germiny about UI"
            className={clsx(classes.imgWrapper)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BottomSection;
