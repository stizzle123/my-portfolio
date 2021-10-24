import { useTransform, motion, useViewportScroll } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { NavBar } from "./components";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { Header } from "./layout";
import CodeCenter from "./layout/projects/CodeCenter";
import Germiny from "./layout/projects/Germiny";
import Rsedge from "./layout/projects/Rsedge";
import WorkHistory from "./layout/projects/WorkHistory";
import Xtraders from "./layout/projects/Xtraders";

import { organizationStructuredData } from "./structured-data";

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
        <title>Frontend Developer - Arifayan Idowu</title>
        <meta content="website" property="og:type" />
        <meta content="https://www.arifayanidowu.com/" property="og:url" />
        <meta
          name="og:description"
          content="Arifayan Idowu - Frontend developer | Personal portfolio, I build websites, web applications, mobile responsive web applications, mobile app development using React Native."
        />
        <meta
          property="og:keywords"
          content="Best portfolio, Best portfolio design, Portfolio design, Best UI designs, UI designs, Programming, Analysis, Analytics, Coding, Optimization, API, ReactJS Developer, Software design, GIT, Project Management, Software Developer, Mobile developer, Frontend developer,  UI designer, Material UI, Senior Developer, Fullstack Developer, Web Developer, Portfolio, personal portfolio, Mobile responsiveness"
        />
        <script type="application/ld+json">
          {organizationStructuredData()}
        </script>
      </Helmet>
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
