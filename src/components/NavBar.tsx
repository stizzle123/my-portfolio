import { useState } from "react";

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
  Divider,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { useStyles } from "../theme";
import { colors } from "../utilities/colors";
import CustomModal from "./CustomModal";

interface IProps {
  type?: string;
}

const NavBar = ({ type }: IProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //@ts-ignore
  const { title, timeline } = useSelector((state) => state.title);

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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomModal {...{ open, handleClose, type }} />
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
                color: colors.white,
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <a
              href="https://github.com/stizzle123"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton>
                <GitHub sx={{ color: colors.lightGrey }} />
              </IconButton>
            </a>
            <a
              href="https://linkedin.com/in/olatubosun-arifayan "
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton>
                <LinkedIn sx={{ color: colors.lightGrey }} />
              </IconButton>
            </a>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                background: colors.lightGrey,
              }}
            />
            <motion.div
              style={{
                width: "fit-content",
                display: "inline-block",
              }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <IconButton onClick={() => setOpen(true)} size="medium">
                <Avatar
                  src="/img/idowu-sm.jpeg"
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                />
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
