import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children?: React.ReactNode | React.ReactElement;
}

const ScrollRevealContainer = ({ children }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 100,
          duration: 5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ y: 50, opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default ScrollRevealContainer;
