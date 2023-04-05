import React from "react";

import { Container, ProgressBar } from "./styles";

interface LoadingBarProps {
  loadingProgress: number;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ loadingProgress }) => {
  return (
    <Container>
      <ProgressBar loadingProgress={loadingProgress} />
    </Container>
  );
};

