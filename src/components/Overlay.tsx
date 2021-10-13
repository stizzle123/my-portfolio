import { useTheme } from "@mui/material";
import { motion, MotionValue } from "framer-motion";

interface Props {
  opacity: MotionValue<number>;
}

const Overlay = ({ opacity }: Props) => {
  const theme = useTheme();
  const spring = {
    type: "spring",
    damping: 600,
    stiffness: 300,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      style={{
        opacity,
        height: "100%",
        background: theme.palette.primary.main,
        zIndex: 3,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "100%",
      }}
      transition={spring}
    />
  );
};

export default Overlay;
