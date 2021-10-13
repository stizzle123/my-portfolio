import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

interface IProps {
  setTitle: any;
  setTimeline: any;
}

const CodeCenter = ({ setTitle, setTimeline }: IProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setTitle("Instructor");
      setTimeline("2017 - 2019");
    } else {
      setTitle(null);
      setTimeline(null);
    }
  }, [setTitle, inView, setTimeline]);

  return (
    <div id="codecenter" ref={ref}>
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default CodeCenter;
