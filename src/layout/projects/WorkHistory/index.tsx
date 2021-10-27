import { InView } from "react-intersection-observer";
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

  const updateTitleAsync = (inView: boolean, entry: any) => {
    if (inView && entry.target.id === "resume") {
      dispatch(setTitleAsync("Various Roles"));
      dispatch(setTimelineAsync("2017 - 2021"));
      dispatch(setCountAsync("05"));
    }
  };

  return (
    <InView onChange={(inView, entry) => updateTitleAsync(inView, entry)}>
      {({ ref }) => (
        <div id="resume" className={classes.resumeContainer} ref={ref}>
          <TopSection />
          <BottomSection />
          <Footer />
        </div>
      )}
    </InView>
  );
};

export default WorkHistory;
