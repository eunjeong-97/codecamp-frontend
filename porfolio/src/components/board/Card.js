import styled from "@emotion/styled";
import Image from "next/image";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import useWindowDimensions from "@/utils/useWindowDimensions";
import { fonts, colors } from "@/styles/globalStyle";
import card01 from "../../../public/image/board/img_card_01.png";
import card02 from "../../../public/image/board/img_card_02.png";
import card03 from "../../../public/image/board/img_card_03.png";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default ({ title, writer, time, likeNum, idx, id }) => {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { width } = useWindowDimensions();
  const cardWidth = (width - 40 - 24) / 2;

  const requestLike = async () => {
    try {
      await likeBoard({ variables: { boardId: id } });
      router.replace(router.asPath); // 새로고침
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <Container width={cardWidth}>
      <TopBtn onClick={() => alert("카드버튼누름", idx)}>
        <Top style={{ backgroundImage: `url(${card01.src})` }} />
      </TopBtn>
      <Content>
        <Title>{title}</Title>
        <Row>
          <Column align="start">
            <Row mb="8">
              <Profile
                width={20}
                height={20}
                src={require("../../../public/image/ico_profile_light.png")}
              />
              <Name ml={6}>{writer}</Name>
            </Row>
            <Date>Date: {time.slice(0, 10).replace(/-/g, ".")}</Date>
          </Column>
          <Column>
            <LikeBtn onClick={requestLike}>
              <Image
                width={20}
                height={18}
                src={require("../../../public/image/ico_thumb_up.png")}
              />
            </LikeBtn>
            <Name mt={6}>{likeNum}</Name>
          </Column>
        </Row>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: transparent;
  border: none;
  padding: 0;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1199px) {
    width: ${(props) => Number(props.width)}px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1200px) {
    width: 282px;
  }
`;
const Top = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  aspect-ratio: 282/120;
  background-size: contain;
  background-repeat: no-repeat;
`;
const TopBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 0;
`;
const Content = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  background-color: ${colors.white};
`;
const Title = styled.span`
  display: inline-block;
  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.black};
  margin-bottom: 20px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => `${props.mb}px`};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
`;
const Profile = styled(Image)`
  border-radius: 50%;
  margin-right: 6px;
`;
const Name = styled.span`
  display: inline-block;
  font-family: ${fonts.regular};
  font-size: 16px;
  color: ${colors.black};
  margin-top: ${(props) => `${props.mt}px`};
  margin-left: ${(props) => `${props.ml}px`};
`;
const Date = styled.span`
  font-family: ${fonts.regular};
  font-size: 12px;
  color: ${colors.gray03};
`;
const LikeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
