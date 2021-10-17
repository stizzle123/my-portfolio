import { useTransform, motion, useViewportScroll } from "framer-motion";

import { NavBar } from "./components";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { Header } from "./layout";
import CodeCenter from "./layout/projects/CodeCenter";
import Germiny from "./layout/projects/Germiny";
import Rsedge from "./layout/projects/Rsedge";
import WorkHistory from "./layout/projects/WorkHistory";
import Xtraders from "./layout/projects/Xtraders";

interface IProps {
  toggleTheme?: any;
  type?: any;
}

const UI: React.FC<IProps> = ({ toggleTheme, type }) => {
  const { scrollYProgress } = useViewportScroll();
  const width = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const transition = {
    type: "spring",
    stiffness: 120,
    damping: 60,
  };

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          zIndex: 9999999999999,
          background: "red",
          width: "100%",
          scaleX: width,
          originX: 0,
        }}
        initial={{
          originX: 0,
        }}
        transition={transition}
      />
      <Header />
      <NavBar {...{ type }} />
      <CodeCenter />
      <Xtraders />
      <Rsedge />
      <Germiny />
      <WorkHistory />
      <ToggleThemeButton {...{ toggleTheme, type }} />
    </>
  );
};

export default UI;
