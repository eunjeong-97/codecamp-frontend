import styled from "@emotion/styled";
import { colors, fonts, Shadow } from "@/styles/globalStyle";

export const ContentWrap = styled(Shadow)`
  padding: 90px 102px;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
  button {
    background-color: ${colors.white};
    border: 1px solid ${colors.gray04};
    padding: 14px 60px;
    cursor: pointer;
    font-family: ${fonts.medium};
    font-size: 16px;
  }
  button:first-of-type {
    margin-right: 24px;
  }
`;

export const CommentHeader = styled.div`
  max-width: 1200px;
  padding: 40px 0;
  border-top: 1px solid ${colors.gray04};
  margin: 0 auto;
  display: flex;
  align-items: center;
  span {
    font-family: ${fonts.medium};
    font-size: 18px;
    display: inline-block;
    margin-left: 14px;
    margin-bottom: 4px;
  }
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;
export const StarWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

export const CommentInputWrap = styled.div`
  margin: 20px auto 40px auto;
  max-width: 1200px;
  border: 1px solid ${colors.gray04};
  @media screen and (max-width: 1199px) {
    margin: 20px;
    margin-bottom: 40px;
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  padding: 20px;
  vertical-align: text-top;
  font-family: ${fonts.medium};
  border: none;
  &::placeholder {
    color: ${colors.gray04};
  }
`;

export const CommentButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.gray06};
  font-family: ${fonts.medium};
  font-size: 16px;

  span {
    display: inline-block;
    font-family: ${fonts.medium};
    font-size: 16px;
    color: ${colors.gray04};
    margin: 14px;
  }
  button {
    font-family: ${fonts.medium};
    font-size: 16px;
    background-color: ${colors.black};
    color: ${colors.white};
    padding: 0 16px;
  }
`;
