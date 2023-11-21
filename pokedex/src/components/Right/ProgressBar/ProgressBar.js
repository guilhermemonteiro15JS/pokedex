import React from "react";
import { ProgressBarWrapper, ProgressBarFill } from "./styled";

const ProgressBar = ({ percentage }) => {
    return (
      <ProgressBarWrapper>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarWrapper>
    );
  };

export default ProgressBar;