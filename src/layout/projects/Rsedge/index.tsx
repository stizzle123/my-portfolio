import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import {
  setTimelineAsync,
  setTitleAsync,
} from "../../../features/title/titleSlice";

const THRESHOLD = [0, 0.25, 0.5, 0.75, 0.9, 1];

const Rsedge = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });
  useEffect(() => {
    //@ts-ignore
    if (inView) {
      dispatch(setTitleAsync("Frontend Developer"));
      dispatch(setTimelineAsync("2019 - 2021"));
    }
  }, [inView, dispatch]);
  return (
    <div id="rsedge" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Rsedge;
