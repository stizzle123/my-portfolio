import React from "react";
import { Button, ButtonProps, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../utilities/colors";

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

const AnimButton = ({ children, ...rest }: IProps) => {
  const theme = useTheme();
  return (
    <motion.div
      style={{ width: "fit-content" }}
      whileTap={{
        scale: 0.8,
      }}
    >
      <Button
        {...rest}
        style={{
          borderRadius: 0,
          padding: theme.spacing(1, 3),
          color: colors.white,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimButton;
