import { Typography, Box } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "../../../theme";
import useResponsive from "../../../hooks/useResponsive";
import ScrollRevealContainer from "../../../components/ScrollRevealContainer";

const BottomSection = () => {
  const classes = useStyles();
  const [matches] = useResponsive();

  return (
    <div
      className={clsx(classes.container)}
      style={{
        paddingBottom: matches ? 100 : 110,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          marginBottom: matches ? 5 : 10,
        }}
      >
        <ScrollRevealContainer>
          <Typography
            variant={matches ? "h3" : "h2"}
            sx={{
              fontWeight: 600,
              letterSpacing: 2,
              width: matches ? "100%" : 600,
              margin: "10px auto",
            }}
            align="center"
            gutterBottom
          >
            Creating simplicity out of complexity
          </Typography>
        </ScrollRevealContainer>
        <ScrollRevealContainer>
          <Typography
            className={classes.lightPurpleText}
            sx={{ width: matches ? "100%" : 600, margin: "auto" }}
          >
            Enterprise resource planning applications are complex systems that
            requires a good understanding of a system as such before using one.
            RSEDGE was able to bridge that gap, removing all the complexities
            that comes with a system of its kind, easy-to-use, coupled with a
            user friendly UI, makes this application one of a kind.
          </Typography>
        </ScrollRevealContainer>
      </Box>
      <div style={{ position: "relative" }}>
        <ScrollRevealContainer>
          <img
            alt="rsedge"
            src={"/img/rsedge.png"}
            srcSet={"/img/rsedge.png 2x"}
            className={clsx(classes.imgWrapper)}
            loading="lazy"
            draggable={false}
          />
        </ScrollRevealContainer>
        <ScrollRevealContainer>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#b1b1b1",
              marginTop: 5,
              textDecoration: "underline",
              cursor: "not-allowed",
            }}
            align="center"
          >
            Link not available for this project
          </Typography>
        </ScrollRevealContainer>
      </div>
    </div>
  );
};

export default BottomSection;
