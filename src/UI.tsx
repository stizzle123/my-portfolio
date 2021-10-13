import { NavBar } from "./components";
import { Header } from "./layout";
import CodeCenter from "./layout/projects/CodeCenter";
import Germiny from "./layout/projects/Germiny";
import Rsedge from "./layout/projects/Rsedge";
import WorkHistory from "./layout/projects/WorkHistory";
import Xtraders from "./layout/projects/Xtraders";

interface IProps {
  title: string;
  setTitle: any;
  timeline: string;
  setTimeline: any;
}

const UI: React.FC<IProps> = ({ title, setTitle, timeline, setTimeline }) => {
  return (
    <>
      <Header />
      <NavBar {...{ title, timeline }} />
      <CodeCenter {...{ setTitle, setTimeline }} />
      <Xtraders {...{ setTitle, setTimeline }} />
      <Rsedge {...{ setTitle, setTimeline }} />
      <Germiny {...{ setTitle, setTimeline }} />
      <WorkHistory />
    </>
  );
};

export default UI;
