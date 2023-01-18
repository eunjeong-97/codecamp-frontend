import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export default function DynamicRoutingBoardMutation() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoardFunc] = useMutation(CREATE_BOARD);
  const route = useRouter();

  const onSubmit = async () => {
    if (!writer) {
      alert("작성자를 입력해주세요");
      return;
    }
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }
    try {
      const {
        data: { createBoard },
      } = await createBoardFunc({ variables: { writer, title, contents } });
      alert(createBoard.message);
      route.push(
        `/03_routing/08_dynamic_routed_mutation/${createBoard.number}`
      );
    } catch (error) {
      // try 내용을 시도하다가 실패하면, 그 다음 내용들을 모두 무시하고 바로 catch가 실행됨
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>게시물등록페이지</h1>
      <input
        type="text"
        onChange={({ target }) => setWriter(target.value)}
        placeholder="작성자"
      />
      <br />
      <input
        type="text"
        onChange={({ target }) => setTitle(target.value)}
        placeholder="제목"
      />
      <br />
      <input
        type="text"
        onChange={({ target }) => setContents(target.value)}
        placeholder="내용"
      />
      <br />
      <button onClick={onSubmit}>게시물 등록하기</button>
    </div>
  );
}
