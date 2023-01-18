import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #ffefeb;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.span`
  font-size: 20px;
  display: block;
  text-align: center;
  font-weight: 600;
`;

export const Label = styled.span`
  font-weight: 500;
`;
export const Input = styled.input`
  margin: 10px 0 20px 0;
  padding: 10px 20px;
  outline-style: none;
`;

export const Button = styled.button`
  width: 50%;
  margin: 0 auto;
  border-color: transparent;
  background-color: #ff8d70;
  padding: 10px 0;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
