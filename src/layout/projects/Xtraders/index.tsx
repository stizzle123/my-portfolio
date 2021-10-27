import { InView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import {
  setTimelineAsync,
  setTitleAsync,
  setCountAsync,
} from "../../../features/title/titleSlice";

const Xtraders = () => {
  const dispatch = useDispatch();

  const updateTitleAsync = (inView: boolean, entry: any) => {
    if (inView && entry.target.id === "xtraders") {
      dispatch(setTitleAsync("Freelance"));
      dispatch(setTimelineAsync("2020 (Contract)"));
      dispatch(setCountAsync("02"));
    }
  };

  return (
    <InView onChange={(inView, entry) => updateTitleAsync(inView, entry)}>
      {({ ref }) => (
        <div id="xtraders" ref={ref}>
          <TopSection />
          <BottomSection />
        </div>
      )}
    </InView>
  );
};

export default Xtraders;
