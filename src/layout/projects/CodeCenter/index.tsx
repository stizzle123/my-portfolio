import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import { IProps } from "../../../types";

const CodeCenter = ({ setTitle, setTimeline, type }: IProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    //@ts-ignore
    if (inView) {
      setTitle("Instructor");
      setTimeline("2017 - 2019");
    }
  }, [setTitle, inView, setTimeline]);

  return (
    <div id="codecenter" ref={ref}>
      <TopSection />
      <BottomSection {...{ type }} />
    </div>
  );
};

export default CodeCenter;
