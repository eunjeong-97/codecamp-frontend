import styled from "@emotion/styled";
import { colors, fonts } from "@/styles/globalStyle";

// Layout
export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray06};
`;
export const Container = styled.div`
  background-color: ${(props) => props?.color || colors.white};
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
export const Header = styled.div`
  background-color: ${colors.gray05};
  padding: 10px;
  margin-bottom: 40px;
`;
export const Title = styled.p`
  font-family: ${fonts.bold};
  font-size: 40px;
  color: ${colors.black};
`;
export const Button = styled.button`
  align-items: center;
  width: 40%;
  padding: 10px;
  margin: 40px auto 0 auto;
  border: none;
  background-color: ${(props) => props.color || colors.gray05};
  color: ${colors.black};
  font-family: ${fonts.medium};
`;

// LabelInput
export const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Label = styled.span`
  display: flex;
  flex: 2;
  font-family: ${fonts.regular};
  color: ${colors.gray03};
  font-size: 14px;
`;

export const Input = styled.input`
  display: flex;
  flex: 5;
  padding: 10px;
`;

const QQQ = styled.div``;
export default QQQ;
