import { useEffect } from "react";
import { Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { GridListItems } from "../../../components";
import { ItemProps } from "../../../types";

const jobs: ItemProps[] = [
  {
    date: "2021 - ",
    company: "Seamless HR",
    jobTitle: "Frontend Developer",
    description:
      "Help maintain and develop mobile/web applications using React Native.",
  },
  {
    date: "2019 - 2021",
    company: "RusselSmith Group",
    jobTitle: "Project Manager/Team Lead",
    description:
      "Help maintain and develop mobile & web applications using Javascript based technologies.",
  },
  {
    date: "2019",
    company: "The GIG Group",
    jobTitle: "Frontend Developer",
    description: "Help maintain and develop web applications using Angular.",
  },
  {
    date: "2017 - 2019",
    company: "The Code Center",
    jobTitle: "Fullstack Engineer/Instructor",
    description:
      "Worked as an instructor, also helped build & maintain web applications.",
  },
  {
    date: "2017 - 2019",
    company: "Swapspace",
    jobTitle: "Fullstack Engineer",
    description:
      "Building and maintenance of mobile and web applications for a range of clients.",
  },
];

const BottomSection = () => {
  const controls = useAnimation();
  const { inView, ref } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 100,
          delay: index * 0.3,
        },
      }));
    }
  }, [inView, controls]);

  return (
    <div ref={ref}>
      <Typography gutterBottom>Job History</Typography>
      {jobs.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
        >
          <GridListItems
            date={item.date}
            company={item.company}
            jobTitle={item.jobTitle}
            description={item.description}
            items={jobs}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BottomSection;
