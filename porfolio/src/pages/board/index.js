import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Image from "next/image";

import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import Card from "@/components/board/Card";
import Loading from "@/components/common/Loading";
import { colors, fonts, Shadow } from "@/styles/globalStyle";

const FETCH_BEST_BOARDS = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      createdAt
    }
  }
`;

const BoardItem = ({ num, title, writer, date }) => {
  return (
    <Row>
      <Column></Column>
    </Row>
  );
};

export default () => {
  const [input, setInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const { data: bestData } = useQuery(FETCH_BEST_BOARDS);

  const onSearch = async () => {
    if (!input) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (!dateInput) {
      alert("날짜를 입력해주세요.");
      return;
    }
    alert({ input, dateInput });
  };
  return (
    <div style={{ paddingBottom: 300 }}>
      <Header />
      <Banner />

      {/* 베스트 */}
      <Title>베스트 게시글</Title>
      {bestData?.fetchBoardsOfTheBest ? (
        <Row>
          {bestData.fetchBoardsOfTheBest.map((item, idx) => (
            <Card
              key={item._id}
              idx={idx}
              id={item._id}
              title={item.title}
              writer={item.writer}
              time={item.createdAt}
              likeNum={item.likeCount}
            />
          ))}
        </Row>
      ) : (
        <Loading />
      )}

      {/* 검색창 */}
      <Row mt={80}>
        <InputWrap>
          <Image
            src={require("../../../public/image/ico_search.png")}
            width={24}
            height={24}
          />
          <Input
            type="text"
            onChange={({ target }) => setInput(target.value)}
          />
        </InputWrap>
        <DateInput
          type="text"
          onChange={({ target }) => setDateInput(target.value)}
          placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        />
        <SearchBtn onClick={onSearch}>검색하기</SearchBtn>
      </Row>

      {/* 게시물 */}
      <Boards></Boards>
    </div>
  );
};

const Title = styled.p`
  text-align: center;
  font-family: ${fonts.bold};
  color: ${colors.black};
  font-size: 36px;
  margin-bottom: 40px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: ${(props) => props.mt}px;
  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 52px;
  padding-left: 18px;
  background-color: ${colors.gray06};
  border-radius: 10px;
`;

const Input = styled.input`
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
`;

const DateInput = styled.input`
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
const SearchBtn = styled.button`
  height: 52px;
  padding: 0 16px;
  background-color: ${colors.black};
  border: none;
  border-radius: 10px;
  font-family: ${fonts.medium};
  font-size: 16px;
  color: ${colors.white};
`;

const Boards = styled.div``;
const Column = styled.p``;
