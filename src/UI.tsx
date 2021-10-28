import React from "react";
import { useTransform, motion, useViewportScroll } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { organizationStructuredData } from "./structured-data";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { NavBar } from "./components";
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
      <Helmet>
        <meta content="website" property="og:type" />
        <meta content="https://arifayanidowu.com/" property="og:url" />
        <meta
          property="og:title"
          content="Frontend Developer - Arifayan Idowu"
        />
        <meta
          property="og:site_name"
          content="Frontend Developer - Arifayan Idowu"
        />
        <script type="application/ld+json">
          {organizationStructuredData()}
        </script>
      </Helmet>
      <div
        style={{
          transition: "all 200ms ease-in-out",
        }}
      >
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
      </div>
    </>
  );
};

export default UI;
