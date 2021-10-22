import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import { useStyles } from "../../../theme";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import Footer from "./Footer";
import {
  setTimelineAsync,
  setTitleAsync,
  setCountAsync,
} from "../../../features/title/titleSlice";

const WorkHistory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      dispatch(setTitleAsync("Various Roles"));
      dispatch(setTimelineAsync("2017 - 2021"));
      dispatch(setCountAsync("05"));
    }
  }, [dispatch, inView]);

  return (
    <div id="resume" className={classes.resumeContainer} ref={ref}>
      <TopSection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default WorkHistory;
