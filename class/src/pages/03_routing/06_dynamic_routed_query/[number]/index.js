import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function DynamicRoutedBoardQuery() {
  const {
    query: { boardId },
  } = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(boardId) },
  });
  console.log(data);

  if (!data?.fetchBoard)
    return <div>{boardId}번째 게시물 내용이 없습니다.</div>;
  return (
    <div>
      <h1>{boardId}번째 결과페이지</h1>
      <p>작성자:{data.fetchBoard.writer}</p>
      <p>제목:{data.fetchBoard.title}</p>
      <p>내용:{data.fetchBoard.contents}</p>
    </div>
  );
}
