import styled from "@emotion/styled";

export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#FFD600",
  gray01: "#333333",
  gray02: "#4F4F4F",
  gray03: "#828282",
  gray04: "#BDBDBD",
  gray05: "#E0E0E0",
  gray06: "#F2F2F2",
};

export const fonts = {
  light: "NotoSansKR-Light", //300
  regular: "NotoSansKR-Regular", //400
  medium: "NotoSansKR-Medium", //500
  bold: "NotoSansKR-Bold", //700
  thin: "NotoSansKR-Thin",
};

export const Shadow = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  padding: 80px 102px;
`;
