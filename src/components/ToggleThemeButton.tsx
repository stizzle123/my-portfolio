import { Fab } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useStyles } from "../theme";

type Props = {
  toggleTheme: any;
  type: string | any;
};

const ToggleThemeButton = ({ toggleTheme, type }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.themeBtnAbsolute}>
      <Fab
        onClick={toggleTheme}
        sx={{
          background:
            type === "light"
              ? "linear-gradient(90deg, #d53369 0%, #daae51 100%)"
              : "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
          color: "#fff",
          "&:hover": {
            background:
              type === "light"
                ? "linear-gradient(90deg, #c92a5f 0%, #b9913b 100%)"
                : "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
          },
        }}
        size="medium"
      >
        {type === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Fab>
    </div>
  );
};

export default ToggleThemeButton;
