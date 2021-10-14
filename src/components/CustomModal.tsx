import { Close } from "@mui/icons-material";
import {
  Dialog,
  Grid,
  Typography,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { SetStateAction } from "react";
import { colors } from "../utilities/colors";
import AnimButton from "./AnimButton";

interface Props {
  open: boolean;
  handleClose: () => void | SetStateAction<boolean>;
}

const CustomModal = ({ open, handleClose }: Props) => {
  const theme = useTheme();
  return (
    <>
      {open && (
        <motion.div layoutId="profile" style={{ position: "relative" }}>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            PaperProps={{
              square: true,
            }}
            style={{
              overflow: "unset",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
                zIndex: 9999,
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
                "&:hover": {
                  background: theme.palette.primary.main,
                },
              }}
              size="small"
            >
              <Close fontSize="small" />
            </IconButton>
            <Grid container>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="/img/idowu.jpg"
                  alt="Arifayan Idowu"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: 13,
                      color: colors.lightPurpleText,
                    }}
                  >
                    Discover
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    About Me
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      color: colors.lightGrey,
                      fontSize: 14,
                      marginBottom: 5,
                    }}
                  >
                    My name is Arifayan Idowu Olatubosun, I'm a frontend
                    developer from Lagos, Nigeria, and I'm very dedicated to my
                    work. With more than 5 years experience as a professional
                    software engineer, I believe I've acquired the necessary
                    skillset to build amazing products.
                  </Typography>
                  <a
                    href="/file/resume.pdf"
                    download
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <AnimButton variant="contained">Download CV</AnimButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Dialog>
        </motion.div>
      )}
    </>
  );
};

export default CustomModal;
