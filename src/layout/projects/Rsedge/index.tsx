import { InView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import {
  setTimelineAsync,
  setTitleAsync,
  setCountAsync,
} from "../../../features/title/titleSlice";

const Rsedge = () => {
  const dispatch = useDispatch();

  const updateTitleAsync = (inView: boolean, entry: any) => {
    if (inView && entry.target.id === "rsedge") {
      dispatch(setTitleAsync("Frontend Developer"));
      dispatch(setTimelineAsync("2019 - 2021"));
      dispatch(setCountAsync("03"));
    }
  };
  return (
    <InView onChange={(inView, entry) => updateTitleAsync(inView, entry)}>
      {({ ref }) => (
        <div id="rsedge" ref={ref}>
          <TopSection />
          <BottomSection />
        </div>
      )}
    </InView>
  );
};

export default Rsedge;
