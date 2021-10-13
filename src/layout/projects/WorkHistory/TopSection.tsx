import { Typography } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";

const TopSection = () => {
  const [matches] = useResponsive();

  return (
    <div style={{ height: "50vh" }}>
      <Typography
        gutterBottom
        variant={matches ? "h4" : "h3"}
        sx={{
          width: matches ? "100%" : 600,
          marginTop: 20,
        }}
      >
        I offer immense value to companies looking for a frontend/fullstack
        developer.
      </Typography>
    </div>
  );
};

export default TopSection;
