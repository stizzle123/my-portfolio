import { NavBar } from "./components";
import { Header } from "./layout";
import CodeCenter from "./layout/projects/CodeCenter";

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
    </>
  );
};

export default UI;
