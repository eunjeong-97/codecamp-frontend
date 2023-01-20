import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";

import { fonts, colors } from "@/styles/globalStyle";
import banner01 from "../../../public/image/img_banner_01.png";
import banner02 from "../../../public/image/img_banner_02.png";
import banner03 from "../../../public/image/img_banner_03.png";

export default () => {
  const router = useRouter();
  return (
    <>
      <Container style={{ backgroundImage: `url(${banner01.src})` }}>
        <Content>
          <Button>
            <Image
              src={require("../../../public/image/ico_arrow_left.png")}
              width={24}
              height={24}
            />
          </Button>
          <div>
            <Title>CAROUSEL DESIGN</Title>
            <Expl>
              캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
              <br />
              같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
              <br />
              각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
            </Expl>
          </div>
          <Button>
            <Image
              src={require("../../../public/image/ico_arrow_right.png")}
              width={24}
              height={24}
            />
          </Button>
        </Content>
        <DotWrap>
          <Dot active />
          <Dot center />
          <Dot />
        </DotWrap>
      </Container>
      <MenuWrap>
        <Menu
          active={router.pathname === "/board"}
          onClick={() => router.push("/board")}
        >
          자유게시판
        </Menu>
        <Menu
          active={router.pathname === "/market"}
          center
          onClick={() => alert("준비중입니다!")}
        >
          중고마켓
        </Menu>
        <Menu
          active={router.pathname === "/profile"}
          onClick={() => alert("준비중입니다!")}
        >
          마이페이지
        </Menu>
      </MenuWrap>
    </>
  );
};

const Container = styled.div`
  height: 400px;
  position: relative;
  background-size: cover;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  @media screen and (max-width: 1199px) {
    margin: 0 40px;
  }
`;
const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${colors.gray06};
  border: none;
`;
const Title = styled.p`
  text-align: center;
  color: ${colors.white};
  font-family: ${fonts.bold};
  font-size: 48px;
  margin-bottom: 32px;
`;
const Expl = styled.p`
  text-align: center;
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 12px;
  line-height: 18px;
`;

const DotWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? colors.white : "transparent")};
  border: ${(props) => props.active || `1px solid ${colors.white}`};
  margin-left: ${(props) => props.center && "16px"};
  margin-right: ${(props) => props.center && "16px"};
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.yellow};
  margin-bottom: 55px;
  padding: 18px 0;
`;
const Menu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 40px;
  position: relative;
  border-left: ${(props) => props.center && `1px solid ${colors.white}`};
  border-right: ${(props) => props.center && `1px solid ${colors.white}`};
  font-family: ${fonts.bold};
  color: ${(props) => (props.active ? colors.black : colors.gray03)};
`;
