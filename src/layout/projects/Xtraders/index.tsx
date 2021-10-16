import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import {
  setTimelineAsync,
  setTitleAsync,
} from "../../../features/title/titleSlice";

const THRESHOLD = [0, 0.25, 0.5, 0.75, 0.9, 1];

const Xtraders = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      dispatch(setTitleAsync("Freelance"));
      dispatch(setTimelineAsync("2020 (Contract)"));
    }
  }, [dispatch, inView]);

  return (
    <div id="xtraders" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Xtraders;
