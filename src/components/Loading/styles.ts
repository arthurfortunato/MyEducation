import styled from "styled-components";

export const Container = styled.div`
  background-color: lightblue;
  height: 15px;
  width: 50%;
  direction: ltr;
  position: relative;
  border-radius: 99px;
  border: 0;

  @media(max-width: 900px) {
    transition: 1.8s all;
    height: 15px;
    width: 60%;
    margin-left: 20px;
  }
`;

interface ProgressBarProps {
  loadingProgress: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  background: linear-gradient(
    90deg,
    rgba(40, 31, 185, 1) 24%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100%;
  width: ${(props) => props.loadingProgress}%;
  transition: width 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 99px;
`;
