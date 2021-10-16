import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import {
  setTimelineAsync,
  setTitleAsync,
} from "../../../features/title/titleSlice";

const CodeCenter = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      dispatch(setTitleAsync("Instructor"));
      dispatch(setTimelineAsync("2017 - 2019"));
    }
  }, [dispatch, inView]);

  return (
    <div id="codecenter" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default CodeCenter;
