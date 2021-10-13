import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useStyles } from "../../../theme";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import Footer from "./Footer";
import { IProps } from "../../../types";

const WorkHistory = ({ setTimeline, setTitle }: IProps) => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      setTitle("Various Roles");
      setTimeline("2017 - 2021");
    }
  }, [setTitle, inView, setTimeline]);

  return (
    <div id="resume" className={classes.resumeContainer} ref={ref}>
      <TopSection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default WorkHistory;
