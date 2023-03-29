import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { brightTurquoise, whiteSnowColor } from "../colors";

const SpinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const DefaultSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid ${whiteSnowColor};
  border-top: 5px solid ${brightTurquoise};
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`;

const SmallSpinner = styled(DefaultSpinner)`
  width: 10px;
  height: 10px;
  border: 2px solid ${whiteSnowColor};
  border-top: 2px solid ${brightTurquoise};
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LoadingSpinner({ small }) {
  const Spinner = small ? SmallSpinner : DefaultSpinner;

  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
