import { Typography, Box } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "../../../theme";
import useResponsive from "../../../hooks/useResponsive";
import { colors } from "../../../utilities/colors";
import { ThemeType } from "../../../types";

const BottomSection = ({ type }: ThemeType) => {
  const classes = useStyles();
  const [matches] = useResponsive();

  return (
    <div className={clsx(classes.container)}>
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          marginBottom: matches ? 5 : 10,
        }}
      >
        <Typography
          variant={matches ? "h3" : "h2"}
          sx={{
            fontWeight: 600,
            letterSpacing: 2,
            width: matches ? "100%" : 600,
            margin: "10px auto",
            color: type === "light" ? colors.darkbrown : colors.white,
          }}
          align="center"
          gutterBottom
        >
          Creating simplicity out of complexity
        </Typography>
        <Typography
          className={classes.lightPurpleText}
          sx={{ width: matches ? "100%" : 600, margin: "auto" }}
        >
          Enterprise resource planning applications are complex systems that
          requires a good understanding of a system as such before using one.
          RSEDGE was able to bridge that gap, removing all the complexities that
          comes with a system of its kind, easy-to-use, coupled with a user
          friendly UI, makes this application one of a kind.
        </Typography>
      </Box>
      <div style={{ position: "relative" }}>
        <img
          alt="rsedge"
          src={"/img/rsedge.png"}
          srcSet={"/img/rsedge.png 2x"}
          className={clsx(classes.imgWrapper)}
        />
      </div>
    </div>
  );
};

export default BottomSection;
