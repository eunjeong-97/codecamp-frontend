import { colors, fonts } from "@/styles/globalStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return (
    <Container>
      <Logo onClick={() => router.push("/")}>
        <Image
          width={236}
          height={36}
          src={require("../../../public/image/img_logo.png")}
          alt="codecamp_logo"
        />
      </Logo>
      <div>
        <Button gap onClick={() => alert("로그인")}>
          로그인
        </Button>
        <Button color={colors.yellow} onClick={() => alert("회원가입")}>
          회원가입
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 156px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    margin: 0 20px;
  }
`;

const Logo = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  border: none;
  background-color: ${(props) => props.color || colors.white};
  border: ${(props) => props.color || `1px solid ${colors.gray05}`};
  padding: 10px 16px;
  border-radius: 10px;
  font-family: ${fonts.bold};
  color: ${colors.black};
  margin-right: ${(props) => props.gap && "10px"};
  cursor: pointer;
`;
