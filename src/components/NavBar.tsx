import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Box,
  useTheme,
  IconButton,
  Toolbar,
  Avatar,
  Hidden,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

import { useStyles } from "../theme";
import { colors } from "../utilities/colors";

interface IProps {
  title: string;
  timeline: string;
}

const NavBar = ({ title, timeline }: IProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 30,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      opacity: 0,
      transition,
    },
    visible: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
      transition,
    },
  };

  return (
    <AnimatePresence key={title} exitBeforeEnter>
      <AppBar
        className={classes.appBar}
        position="sticky"
        elevation={0}
        enableColorOnDark
        style={{
          background: theme.palette.primary.dark,
        }}
      >
        <Toolbar>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              flexGrow: 0.5,
            }}
          >
            <Typography
              sx={{
                width: matches ? "100%" : 200,
                fontSize: matches ? 12 : 14,
              }}
            >
              {title}{" "}
              {timeline && (
                <span
                  style={{
                    color: colors.lightGrey,
                    marginLeft: 2,
                  }}
                >
                  {timeline}
                </span>
              )}
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }}>
            <Hidden smDown>
              <Link
                activeClass={classes.linkActive}
                to="codecenter"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className={clsx(classes.link)}
              >
                The Code Center
              </Link>
              <Link
                activeClass={classes.linkActive}
                to="xtraders"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
              >
                Xtraders
              </Link>
              <Link
                activeClass={classes.linkActive}
                to="rsedge"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
              >
                Rsedge
              </Link>
              <Link
                activeClass={classes.linkActive}
                to="germiny"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
              >
                Germiny
              </Link>
              <Link
                activeClass={classes.linkActive}
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={classes.link}
              >
                Résumé
              </Link>
            </Hidden>
          </Box>

          <Box>
            <IconButton>
              <GitHub sx={{ color: colors.lightGrey }} />
            </IconButton>
            <IconButton>
              <LinkedIn sx={{ color: colors.lightGrey }} />
            </IconButton>

            <IconButton>
              <Avatar
                src="/img/idowu.jpg"
                sx={{
                  width: 25,
                  height: 25,
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </AnimatePresence>
  );
};

export default NavBar;
