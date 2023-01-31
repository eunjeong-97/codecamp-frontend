import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import Card from "@/components/board/Card";
import Loading from "@/components/common/Loading";
import * as S from "@/styles/board/index";

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

const FETCH_BOARDS = gql`
  query fetchBoards(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
    $page: Int
  ) {
    fetchBoards(
      endDate: $endDate
      startDate: $startDate
      search: $search
      page: $page
    ) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
  ) {
    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)
  }
`;

const BoardItem = ({ num, title, writer, date, border, onClick }) => (
  <S.Row
    border={border}
    onClick={() => {
      if (onClick) onClick();
    }}
    pointer={!!onClick}
  >
    <S.Column flex={7} bold={typeof num === "string"}>
      {num}
    </S.Column>
    <S.Column flex={70} bold={typeof num === "string"}>
      {title}
    </S.Column>
    <S.Column flex={15} bold={typeof num === "string"}>
      {writer}
    </S.Column>
    <S.Column flex={15} bold={typeof num === "string"}>
      {date}
    </S.Column>
  </S.Row>
);

const PaginationItem = ({ num, setPage, selected, last }) => (
  <S.Num onClick={() => setPage(num)} last={last} selected={selected}>
    {num}
  </S.Num>
);

export default () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [page, setPage] = useState(1);
  const { data: bestData } = useQuery(FETCH_BEST_BOARDS);
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { endDate: null, startDate: null, search, page },
  });
  const { data: boardCountData } = useQuery(FETCH_BOARDS_COUNT);
  const totalCount = Math.ceil(boardCountData?.fetchBoardsCount / 10);
  const pages = new Array(9).fill(undefined).map((_, index) => {
    let plusNum = 2;
    if (page > 10) plusNum = plusNum + (page - 10);
    return index + plusNum;
  });

  const onSearch = async () => {
    if (!search) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (!dateInput) {
      alert("날짜를 입력해주세요.");
      return;
    }
    alert({ search, dateInput });
  };

  return (
    <div style={{ paddingBottom: 400 }}>
      <Header />
      <Banner />

      {/* 베스트 */}
      <S.Title>베스트 게시글</S.Title>
      {bestData?.fetchBoardsOfTheBest ? (
        <S.Row>
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
        </S.Row>
      ) : (
        <Loading />
      )}

      {/* 검색창 */}
      <S.Row mt={80}>
        <S.InputWrap>
          <Image
            src={require("../../../public/image/ico_search.png")}
            width={24}
            height={24}
          />
          <S.Input
            type="text"
            onChange={({ target }) => setSearch(target.value)}
          />
        </S.InputWrap>
        <S.DateInput
          type="text"
          onChange={({ target }) => setDateInput(target.value)}
          placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
        />
        <S.SearchBtn onClick={onSearch}>검색하기</S.SearchBtn>
      </S.Row>

      {/* 게시물 */}
      <S.Boards>
        <BoardItem num="번호" title="제목" writer="작성자" date="날짜" border />
        {data?.fetchBoards &&
          [...data?.fetchBoards].reverse().map((boardItem, idx) => {
            const { title, writer, createdAt, _id: id } = boardItem;
            const year = createdAt.slice(0, 4);
            const month = createdAt.slice(5, 7);
            const date = createdAt.slice(8, 10);
            return (
              <BoardItem
                key={id}
                num={10 - idx}
                title={title}
                writer={writer}
                date={`${year}.${month}.${date}`}
                border={data?.fetchBoards.length !== idx + 1}
                onClick={() => router.push(`/board/detail/${id}`)}
              />
            );
          })}
      </S.Boards>
      <S.Footer>
        {!isNaN(totalCount) && (
          <S.Pagination>
            <S.ImageBtn
              mr={20}
              disabled={page === 1}
              onClick={() => setPage((_page) => _page - 1)}
            >
              <Image
                src={require("../../../public/image/ico_arrow_left.png")}
                alt="왼쪽화살표"
                width={24}
                height={24}
              />
            </S.ImageBtn>
            <PaginationItem num={1} setPage={setPage} selected={page === 1} />
            {page > 10 && <div style={{ marginRight: 20 }}>...</div>}
            {pages.map((num) => (
              <PaginationItem
                key={num}
                num={num}
                setPage={setPage}
                selected={page === num}
              />
            ))}
            <div style={{ marginRight: 20 }}>...</div>
            <PaginationItem
              num={totalCount}
              setPage={setPage}
              selected={page === totalCount}
              last
            />
            <S.ImageBtn
              ml={20}
              disabled={page === totalCount}
              onClick={() => setPage((_page) => _page + 1)}
            >
              <Image
                src={require("../../../public/image/ico_arrow_right.png")}
                alt="오른쪽화살표"
                width={24}
                height={24}
              />
            </S.ImageBtn>
          </S.Pagination>
        )}

        <S.CreateBtn onClick={() => router.push("/board/create")}>
          <Image
            src={require("../../../public/image/ico_modify.png")}
            width={24}
            height={24}
          />
          <span>게시물 등록하기</span>
        </S.CreateBtn>
      </S.Footer>
    </div>
  );
};
