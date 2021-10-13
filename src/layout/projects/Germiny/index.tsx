import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import TopSection from "./TopSection";
import { IProps } from "../../../types";
import BottomSection from "./BottomSection";

const Germiny = ({ setTitle, setTimeline }: IProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setTitle("Frontend Developer");
      setTimeline("2021 (Contract)");
    }
  }, [setTitle, inView, setTimeline]);

  return (
    <div id="germiny" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Germiny;
