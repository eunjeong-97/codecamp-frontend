import styled from "@emotion/styled";
import { colors, fonts } from "@/styles/globalStyle";

export const Title = styled.p`
  text-align: center;
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 36px;
  margin-bottom: 40px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: ${({ mt }) => mt}px;
  border-bottom: ${({ border }) => `1px solid ${border && colors.gray04}`};
  cursor: ${({ pointer }) => !!pointer && "pointer"};
  @media screen and (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 52px;
  padding-left: 18px;
  background-color: ${colors.gray06};
  border-radius: 10px;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  height: 52px;
  padding: 0 18px 0 10px;
  background-color: ${colors.gray06};
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.black};
  @media screen and (max-width: 1199px) {
    padding: 0 18px 0 2px;
  }
`;

export const DateInput = styled.input`
  height: 52px;
  margin: 0 44px;
  padding: 0 16px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray04};
  outline: none;
  font-family: ${fonts.regular};
  color: ${colors.gray04};
  font-size: 16px;
  text-align: center;
`;
export const SearchBtn = styled.button`
  height: 52px;
  padding: 0 16px;
  background-color: ${colors.black};
  border: none;
  border-radius: 10px;
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.white};
`;

export const Boards = styled.div`
  border-top: 1px solid ${colors.black};
  border-bottom: 1px solid ${colors.black};
  margin: 40px auto 40px auto;
  max-width: 1200px;
  @media screen and (max-width: 1199px) {
    margin: 40px 20px 40px 20px;
  }
`;
export const Column = styled.div`
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex: ${({ flex }) => flex};
  justify-content: center;
  font-family: ${({ bold }) => (bold ? fonts.bold : fonts.regular)};
`;

export const Footer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

export const Pagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;

export const CreateBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray06};
  border-radius: 10px;

  span {
    font-family: ${fonts.medium};
    font-size: 16px;
    text-align: center;
  }
`;

export const Num = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${colors.regular};
  color: ${({ selected }) => (selected ? colors.yellow : colors.gray02)};
  text-decoration: underline;
  font-size: ${({ selected }) => (selected ? 18 : 16)}px;
  padding: 0;
  cursor: pointer;
  margin-right: ${({ last }) => !last && 20}px;
  height: 100%;
`;

export const ImageBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  height: 100%;
  margin-left: ${({ ml }) => ml || 0}px;
  margin-right: ${({ mr }) => mr || 0}px;
`;

export const BoardBtn = styled.button``;
