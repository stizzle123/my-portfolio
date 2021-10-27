import { InView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import {
  setTimelineAsync,
  setTitleAsync,
  setCountAsync,
} from "../../../features/title/titleSlice";

const CodeCenter = () => {
  const dispatch = useDispatch();

  const updateTitleAsync = (inView: boolean, entry: any) => {
    if (inView && entry.target.id === "codecenter") {
      dispatch(setTitleAsync("Instructor"));
      dispatch(setTimelineAsync("2017 - 2019"));
      dispatch(setCountAsync("01"));
    }
  };

  return (
    <InView onChange={(inView, entry) => updateTitleAsync(inView, entry)}>
      {({ ref }) => (
        <div id="codecenter" ref={ref}>
          <TopSection />
          <BottomSection />
        </div>
      )}
    </InView>
  );
};

export default CodeCenter;
