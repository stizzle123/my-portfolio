import { useStyles } from "../../../theme";
import TopSection from "./TopSection";

const WorkHistory = () => {
  const classes = useStyles();

  return (
    <div id="resume" className={classes.resumeContainer}>
      <TopSection />
    </div>
  );
};

export default WorkHistory;
