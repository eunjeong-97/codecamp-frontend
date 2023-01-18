import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  # 변수의 타입 적는 곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 실제 우리가 전달할 변수를 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraghqlMutationArgsPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);

  const onSubmit = async () => {
    const {
      data: { createBoard },
    } = await 나의함수({
      // variables가 $ 역학을 해주기 때문에 안의 args에 $표시를 붙여주지 않는다
      // onSubmit 함수내부에 writer, title, contents 변수가 없지만 에러가 발생하지 않고 잘 작동되는 이유는
      // 체인스코프 덕분이다
      variables: { writer, title, contents },
    });
    const { number, message } = createBoard;
    alert(`${number}, ${message}`);
  };

  // e.target.value 해도 됨
  const onChangeTitle = ({ nativeEvent }) => setTitle(nativeEvent.data);
  const onChangeWriter = ({ nativeEvent }) => setWriter(nativeEvent.data);
  const onChangeContents = ({ nativeEvent }) => setContents(nativeEvent.data);
  return (
    <>
      <input type="text" onChange={onChangeTitle} placeholder="제목" />
      <input type="text" onChange={onChangeWriter} placeholder="작성자" />
      <input type="text" onChange={onChangeContents} placeholder="내용" />
      <button onClick={onSubmit}>게시물 등록하기</button>
    </>
  );
}
