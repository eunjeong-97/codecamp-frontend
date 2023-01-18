import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "김코딩_230114"
      title: "제목입니당"
      contents: "내용입니당"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);
  const onClickSubmitSync = () => {
    const res = 나의함수();
    console.log("비동기함수", res); // Promise
  };
  const onClickSubmitAsync = async () => {
    const {
      data: { createBoard },
    } = await 나의함수();
    console.log("동기함수", createBoard);
    window.alert(createBoard.message);
  };

  //  preflight: 사전요청
  // 프론트가 백엔드에 요청할 때, 백엔드가 GET, PUT 같은 메서드요청이 가능한지 먼저 확인한다
  // 그 다음에 진짜 요청을 한다
  // 따라서 네트워크탭에서 preflight타입 요청은 무시해준다
  // 개발자도구 네트워크탭에서 먼저 clear처리해주고 에러나는 동작을 수행하고 확인
  // payload === body

  return (
    <>
      <button onClick={onClickSubmitAsync}>GRAPHQL-API 동기요청</button>
    </>
  );
}
