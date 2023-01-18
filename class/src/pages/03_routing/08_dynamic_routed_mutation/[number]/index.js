import { gql, useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutedBoardMutation() {
  const route = useRouter();
  const {
    query: { boardId },
  } = route;
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(boardId) },
  });

  const onGoBack = () => {
    route.push("/03_routing/07_dynamic_routing_mutation");
  };
  if (!data?.fetchBoard) return <p>{boardId}번째 게시물 내용이 없습니다.</p>;
  return (
    <div>
      <h1>{boardId}번째 게시물</h1>
      <p>작성자: {data.fetchBoard.writer}</p>
      <p>제목: {data.fetchBoard.title}</p>
      <p>내용: {data.fetchBoard.contents}</p>
      <button onClick={onGoBack}>돌아가기</button>
    </div>
  );
}
