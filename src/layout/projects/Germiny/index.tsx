import { InView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import {
  setTimelineAsync,
  setTitleAsync,
  setCountAsync,
} from "../../../features/title/titleSlice";

const Germiny = () => {
  const dispatch = useDispatch();

  const updateTitleAsync = (inView: boolean, entry: any) => {
    if (inView && entry.target.id === "germiny") {
      dispatch(setTitleAsync("Frontend Developer"));
      dispatch(setTimelineAsync("2021 (Contract)"));
      dispatch(setCountAsync("04"));
    }
  };

  return (
    <InView onChange={(inView, entry) => updateTitleAsync(inView, entry)}>
      {({ ref }) => (
        <div id="germiny" ref={ref}>
          <TopSection />
          <BottomSection />
        </div>
      )}
    </InView>
  );
};

export default Germiny;
