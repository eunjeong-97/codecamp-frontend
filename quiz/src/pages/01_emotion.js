import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faWifiStrong,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { colors, fonts } from "@/styles/globalStyle";

const data = [
  "리뷰 작성은 어떻게 하나요?",
  "리뷰 수정/삭제는 어떻게 하나요?",
  "아이디/비밀번호를 잊어버렸어요",
  "회원탈퇴를 하고싶어요",
  "출발지 설정은 어떻게 하나요?",
  "비밀번호를 변경하고 싶어요",
];

const Item = ({ title, index }) => {
  return (
    <ItemWrap>
      <div>
        <p>Q. {index + 1}</p>
        <p>{title}</p>
      </div>
      <Image
        src={require("../../public/image/ico_arrow_bottom.png")}
        alt="qna_collapse"
        width={60}
        height={60}
      />
    </ItemWrap>
  );
};

export default () => {
  return (
    <Body>
      <Container>
        {/* 상태바 */}
        <StatusBar>
          <div>
            <FontAwesomeIcon icon={faWifiStrong} />
            <FontAwesomeIcon icon={faSignal} />
            <FontAwesomeIcon icon={faBatteryFull} />
            <span>12:30</span>
          </div>
        </StatusBar>

        {/* 검색창 */}
        <Search>
          <Image
            alt="search"
            src={require("../../public/image/ico_search.png")}
            width={32}
            height={32}
          />
        </Search>

        {/* 헤더 */}
        <Header>
          <span>마이</span>
          <div>
            <Profile
              alt="profile"
              src={require("../../public/image/img_profile.png")}
              width={60}
              height={60}
            />
            <span>춘식이</span>
            <Image
              alt="profile_more"
              src={require("../../public/image/ico_arrow_right.png")}
              width={28}
              height={28}
            />
          </div>
        </Header>

        {/* 섹션 제목 */}
        <Section>
          <span>공지사항</span>
          <span>이벤트</span>
          <span>FAQ</span>
          <span>Q&A</span>
        </Section>

        <Divider />

        {data.map((item, index) => (
          <Item title={item} index={index} />
        ))}

        <FooterWrap>
          <TabItem>
            <Image
              src={require("../../public/image/tab/ico_tab_home.png")}
              alt="tab_home"
              width={40}
              height={40}
            />
            <span>홈</span>
          </TabItem>
          <TabItem>
            <Image
              src={require("../../public/image/tab/ico_tab_load.png")}
              alt="tab_load"
              width={35}
              height={43}
            />
            <span>잇츠로드</span>
          </TabItem>
          <TabItem>
            <Image
              src={require("../../public/image/tab/ico_tab_like.png")}
              alt="tab_like"
              width={40}
              height={32}
            />
            <span>마이찜</span>
          </TabItem>
          <TabItem>
            <Image
              src={require("../../public/image/tab/ico_tab_profile.png")}
              alt="tab_profile"
              width={40}
              height={40}
            />
            <span>마이</span>
          </TabItem>
        </FooterWrap>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.body};
`;

const Container = styled.div`
  width: 640px;
  background-color: ${colors.white};
  position: relative;
`;

const StatusBar = styled.div`
  background-color: #e5e5e5;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  div {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-family: ${fonts.bold};
    color: ${colors.gray01};
  }
`;

const Search = styled.span`
  margin-top: 30px;
  margin-right: 40px;
  display: flex;
  flex-direction: row-reverse;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 48px 40px 48px;

  span {
    font-family: ${fonts.bold};
    color: ${colors.black};
    font-size: 40px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      margin: 0 10px;
    }
  }
`;

const Profile = styled(Image)`
  border-radius: 50%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 48px;
  span {
    font-family: ${fonts.bold};
    color: #cacaca;
    font-size: 30px;
  }
  span:nth-child(3) {
    color: #ff1b6d;
    position: relative;
  }
  span:nth-child(3):after {
    content: "";
    background-color: #ff1b6d;
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -10px;
    left: -50%;
    transform: translateX(50%);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cacaca;
  margin: 50px 0 25px 0;
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 48px 40px 48px;

  p:nth-child(1) {
    font-family: ${fonts.regular};
    color: #adadad;
    font-size: 18px;
    margin-bottom: 5px;
  }
  p:nth-child(2) {
    font-family: ${fonts.regular};
    color: ${colors.black};
    font-size: 24px;
  }
`;

const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 74px;
  border-top: 1px solid #dcdcdc;
`;
const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 10px;
    font-family: ${fonts.regular};
    font-size: 16px;
    color: #adadad;
  }
`;
