import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({
    root: null,
    threshold: 0,
  });

  useEffect(() => {
    //@ts-ignore

    if (inView) {
      dispatch(setTitleAsync("Frontend Developer"));
      dispatch(setTimelineAsync("2021 (Contract)"));
      dispatch(setCountAsync("04"));
    }
  }, [dispatch, inView]);

  return (
    <div id="germiny" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Germiny;
