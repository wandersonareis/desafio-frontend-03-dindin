import styled from "@emotion/styled";
import { highlightColor, whitePureColor } from "../colors";
import { Container } from "../styled";
import { ModalContentForm } from "../modal/modalStyled";

export const LoginContainer = styled(Container)`
  padding: 4% 7%;
`;
export const LoginFormContainer = styled(ModalContentForm)`
  justify-content: space-evenly;
  height: 535px;
  padding: 2.5%;
`;
export const LoginLeftContainer = styled.div`
  display: flex;
  flex: 50%;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TittleParagraph = styled.h1`
  color: ${whitePureColor};

  & > strong {
    color: ${highlightColor};
  }
`;
export const Paragraph = styled.p`
  display: flex;
  width: 614px;
  height: 124px;
  font-size: 28px;
  text-overflow: ellipsis;
  text-align: left;
  margin-right: 100px;
  margin-top: 0;
  color: ${whitePureColor};

  & > strong {
    margin-left: 1%;
    color: ${highlightColor};
  }
`;