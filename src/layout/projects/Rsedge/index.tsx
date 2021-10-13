import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import TopSection from "./TopSection";
import { IProps } from "../../../types";
import BottomSection from "./BottomSection";

const THRESHOLD = [0, 0.25, 0.5, 0.75, 0.9, 1];

const Rsedge = ({ setTitle, setTimeline }: IProps) => {
  const { ref, inView } = useInView({
    threshold: THRESHOLD,
  });
  useEffect(() => {
    //@ts-ignore
    if (inView) {
      setTitle("Frontend Developer");
      setTimeline("2019 - 2021");
    }
  }, [setTitle, inView, setTimeline]);
  return (
    <div id="rsedge" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Rsedge;
