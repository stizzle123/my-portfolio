import { Divider, Grid, Typography, useTheme } from "@mui/material";

import { useStyles } from "../theme";
import { ItemProps } from "../types";
import ScrollRevealContainer from "./ScrollRevealContainer";

interface Props extends ItemProps {
  items: any[];
  index?: number;
}

const GridListItems = ({
  date,
  jobTitle,
  company,
  description,
  items,
  index,
}: Props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ScrollRevealContainer>
      <Grid
        container
        sx={{
          padding: theme.spacing(3, 0),
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={1}>
          <Typography
            sx={{ fontSize: 15 }}
            className={classes.lightPurpleText}
            gutterBottom
          >
            {date}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography gutterBottom sx={{ fontSize: 17, fontWeight: 600 }}>
            {company}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontSize: 15 }} gutterBottom>
            {jobTitle}
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography
            sx={{ fontSize: 15 }}
            className={classes.lightPurpleText}
            gutterBottom
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
      {index === items?.length! - 1 ? null : (
        <Divider
          light
          sx={{
            background: theme.palette.grey.A700,
          }}
        />
      )}
    </ScrollRevealContainer>
  );
};

export default GridListItems;
