import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

interface Props extends TooltipProps {
  children: any;
  title: string;
}

const CustomTooltip = ({ children, title, ...rest }: Props) => {
  return (
    <BootstrapTooltip title={title} {...rest}>
      {children}
    </BootstrapTooltip>
  );
};

export default CustomTooltip;
