import { useState } from "react";
import { Typography, Box } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "../../../theme";
import useResponsive from "../../../hooks/useResponsive";
import CustomSwitch from "../../../components/CustomSwitch";
import CustomTooltip from "../../../components/CustomTooltip";
import { colors } from "../../../utilities/colors";

const BottomSection = () => {
  const classes = useStyles();
  const [matches] = useResponsive();
  const [checked, setChecked] = useState(false);

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
            color: colors.darkbrown,
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
        <div style={{ position: "absolute", right: 0, top: matches ? 0 : 70 }}>
          <CustomTooltip placement="left" arrow title="Toggle theme">
            <span>
              <CustomSwitch
                checked={checked}
                onChange={(e: any) => setChecked(e.target.checked)}
              />
            </span>
          </CustomTooltip>
        </div>
        <img
          alt="rsedge"
          src={checked ? "/img/rsedge-dark.png" : "/img/rsedge.png"}
          srcSet={checked ? "/img/rsedge-dark.png 2x" : "/img/rsedge.png 2x"}
          className={clsx(classes.imgWrapper)}
        />
      </div>
    </div>
  );
};

export default BottomSection;
