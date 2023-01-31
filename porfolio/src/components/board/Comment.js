import styled from "@emotion/styled";
import { colors, fonts, Shadow } from "@/styles/globalStyle";
import Image from "next/image";
import Star from "../common/Star";

export default ({
  writer,
  rating,
  contents,
  createdAt: _createdAt,
  imgUrl,
}) => {
  const year = _createdAt.slice(0, 4);
  const month = _createdAt.slice(5, 7);
  const date = _createdAt.slice(8, 10);
  const createdAt = `${year}.${month}.${date}`;
  return (
    <Container>
      <Row>
        <ProfileImgWrap>
          <Image
            width={48}
            height={48}
            src={
              imgUrl ||
              require("../../../public/image/ico_profile_inActive.png")
            }
          />
        </ProfileImgWrap>
        <Column>
          <InfoWrap>
            <Row>
              <span>{writer}</span>
              <Star starNum={rating} />
            </Row>
            <Row>
              <ImageBtn onClick={() => console.log("버튼")}>
                <Image
                  width={24}
                  height={24}
                  src={require("../../../public/image/ico_modify_light.png")}
                />
              </ImageBtn>
              <ImageBtn onClick={() => console.log("버튼")} ml={8}>
                <Image
                  width={24}
                  height={24}
                  src={require("../../../public/image/ico_close_light.png")}
                />
              </ImageBtn>
            </Row>
          </InfoWrap>
          <Comment>{contents}</Comment>
          <Date>{createdAt}</Date>
        </Column>
      </Row>
    </Container>
  );
};

const Column = styled.div`
  flex: 1;
`;
const Row = styled.div`
  display: flex;
`;

const Container = styled(Column)`
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid ${colors.gray04};
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;
const ProfileImgWrap = styled.div`
  margin-right: 12px;
`;
const InfoWrap = styled(Row)`
  justify-content: space-between;
  height: 24px;
  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: normal;
  span {
    margin-right: 16px;
  }
`;
const Comment = styled.div`
  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray02};
  margin: 4px 0 20px 0;
`;

const ImageBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  height: 100%;
  background-color: transparent;
  margin-left: ${({ ml }) => ml}px;
`;
const Date = styled.div`
  font-family: ${fonts.regular};
  font-size: 12px;
  color: ${colors.gray04};
`;
