import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedBoardQuery() {
  const { data } = useQuery(FETCH_BOARD, { variables: { number: 1111 } });
  console.log("결과물", data);
  return (
    <div>
      <h1>게시글 검색</h1>
      <div>
        <p>작성자: {data?.fetchBoard?.writer}</p>
        <p>제목: {data?.fetchBoard?.title}</p>
        <p>내용: {data?.fetchBoard?.contents}</p>
      </div>
    </div>
  );
}
