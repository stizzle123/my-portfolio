import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import { IProps } from "../../../types";

const THRESHOLD = [0, 0.25, 0.5, 0.75, 0.9, 1];

const Xtraders = ({ setTitle, setTimeline, type }: IProps) => {
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      setTitle("Freelance");
      setTimeline("2020 (Contract)");
    }
  }, [setTitle, inView, setTimeline]);

  return (
    <div id="xtraders" ref={ref}>
      <TopSection />
      <BottomSection {...{ type }} />
    </div>
  );
};

export default Xtraders;
