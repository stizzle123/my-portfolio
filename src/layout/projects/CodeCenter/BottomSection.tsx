import { useEffect } from "react";
import { Grid, Hidden, Typography, Skeleton } from "@mui/material";
import clsx from "clsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import ProgressiveImage from "react-progressive-graceful-image";

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
          <ProgressiveImage
            src={`/img/codecenter-lg-min.png`}
            placeholder={`/img/codecenter-sm.png`}
            srcSetData={{
              srcSet:
                "/img/codecenter-sm.png 1x, /img/codecenter-lg-min.png 2x",
              sizes: "(max-width: 600px) 1x, 2x",
            }}
          >
            {(src: any, loading: boolean) =>
              loading ? (
                <Skeleton
                  sx={{ height: 600, background: "#ccc" }}
                  className={clsx(classes.imgWrapper, classes.imgAbsolute)}
                />
              ) : (
                <motion.img
                  src={src}
                  alt="codecenter"
                  className={clsx(classes.imgWrapper, classes.imgAbsolute)}
                  initial={{
                    y: 0,
                  }}
                  animate={controls}
                  draggable={false}
                  loading="lazy"
                />
              )
            }
          </ProgressiveImage>
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
              }}
              gutterBottom
            >
              The Bootcamp for everyone.
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: colors.lightPurpleText,
              }}
            >
              This was one of my earliest projects, it was built using bootstrap
              as the UI library and sass as the css preprocessor. We had several
              options for design as at the time, but eventually settled for
              something simple and direct. PHP was used as the backend
              technology.
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
              To learn more about The Code Center
            </Typography>
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
            <Hidden smDown>
              <InView>
                {({ ref, inView }) => (
                  <motion.img
                    src={`/img/codecenter-lg-2.png`}
                    alt="codecenter2"
                    srcSet={`/img/codecenter-lg-2.png 2x`}
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
