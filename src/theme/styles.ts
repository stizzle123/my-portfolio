import { Theme, darken } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../utilities/colors";

const useStyles = makeStyles(
  (theme: Theme) => ({
    appBar: {
      color: "inherit",
      height: "10vh",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
    container: {
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 1),
      },
    },
    headerContainer: {
      height: "90vh",
      background: "#151827",
      color: colors.white,
      padding: theme.spacing(5, 1.5),
      [theme.breakpoints.down("sm")]: {
        height: "70vh",
        padding: theme.spacing(0.5, 1),
      },
    },
    headerTitle: {
      textTransform: "uppercase",
      letterSpacing: 2.5,
    },
    lightPurpleText: {
      color: colors.lightPurpleText,
    },
    link: {
      marginRight: "8%",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: 2,
      cursor: "pointer",
      transition: "color 300ms ease-out",
      color: colors.lightPurpleText,
      height: "100%",
      display: "inline-block",
      padding: theme.spacing(2.5, 0),
      "&:hover": {
        color: colors.lightGrey,
      },
    },
    link2: {
      cursor: "pointer",
      transition: "color 300ms ease-out",
      color: colors.lightGrey,
      textDecoration: "underline",
      fontSize: 13,
      "&:hover": {
        color: darken(colors.lightGrey, 0.2),
      },
    },
    linkActive: {
      color: colors.white,
      borderBottom: `1px solid #FF0000`,
    },

    overlay: {
      height: "100%",
      background: theme.palette.primary.main,
      zIndex: 3,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "100%",
    },
    imgWrapper: {
      width: "100%",
      border: `0.5px solid ${
        theme.palette.mode === "light" ? "#f1f1f1" : theme.palette.primary.main
      }`,
      borderRadius: 3,
      boxShadow: `0 0 24px ${
        theme.palette.mode === "light"
          ? "rgba(139, 138, 138, 0.161)"
          : "rgba(0, 0, 0, 0.161)"
      }`,
      objectFit: "cover",
      objectPosition: "center",
    },
    imgAbsolute: {
      position: "absolute",
      top: -150,
      left: 20,
      zIndex: 10,
      width: 600,
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        width: "100%",
        top: 0,
        left: 0,
      },
    },
    mt60: {
      marginTop: 60,
    },

    codecenterContainer: {
      background: "url(/img/code-lg.jpeg), rgba(0,0,0,0.5)",
      height: "80vh",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      color: "#fff",
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 1),
        background: "url(/img/code-sm.jpeg,  rgba(0,0,0,0.5))",
        height: "50vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      },
    },
    xtradersContainer: {
      height: "80vh",
      background: "url(/img/handshake.jpeg), rgba(0,0,0,0.6)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      color: "#fff",
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 1),
        background: "url(/img/handshake-sm.jpeg),  rgba(0,0,0,0.5)",
        height: "50vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      },
    },
    rsedgeContainer: {
      height: "80vh",
      background: "url(/img/planning.jpeg), rgba(0,0,0,0.2)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      color: "#fff",
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 1),
        background: "url(/img/planning-sm.jpeg),  rgba(0,0,0,0.3)",
        height: "50vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      },
    },
    germinyContainer: {
      height: "80vh",
      background: "url(/img/doctor-lg.jpeg), rgba(0,0,0,0.2)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      color: "#fff",
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 1),
        background: "url(/img/doctor.jpeg),  rgba(0,0,0,0.3)",
        height: "50vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      },
    },
    resumeContainer: {
      background: "#151827",
      color: colors.white,
      padding: theme.spacing(3),

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 1),
      },
    },
    themeBtnAbsolute: {
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 999999999999999999,
    },
  }),
  { index: 1 }
);

export default useStyles;
