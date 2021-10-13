import { Typography } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";

const TopSection = () => {
  const [matches] = useResponsive();

  return (
    <div
      style={{
        height: matches ? "100%" : "50vh",
        marginBottom: matches ? 50 : 0,
      }}
    >
      <Typography
        gutterBottom
        variant={matches ? "h4" : "h3"}
        sx={{
          width: matches ? "100%" : 600,
          marginTop: 10,
        }}
      >
        I offer great value to companies looking to hire a frontend developer.
      </Typography>
    </div>
  );
};

export default TopSection;
