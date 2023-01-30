import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import Image from "next/image";

import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import * as S from "@/styles/board/detail";
import Star from "@/components/common/Star";

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const [createBoardCommentFunc] = useMutation(CREATE_BOARD_COMMENT);
  const submitComment = async () => {
    if (!comment) {
      alert("댓글을 입력해주세요.");
      return;
    }
    try {
      const {
        data: { createBoardComment },
      } = await createBoardCommentFunc({
        variables: {
          createBoardCommentInput: {
            writer: "김코딩",
            password: "",
            contents: comment,
            rating: 3,
          },
          boardId: router.query.boardId,
        },
      });
      alert("댓글 등록이 완료되었습니다.");
      // 댓글항목 refetch
      console.log({ createBoardComment });
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div style={{ paddingBottom: 570 }}>
      <Header />
      <Banner />
      <S.ContentWrap></S.ContentWrap>
      <S.ButtonWrap>
        <button onClick={() => router.push("/board/")}>목록으로</button>
        <button
          onClick={() => router.push(`/board/${router.query.boardId}/edit`)}
        >
          수정하기
        </button>
      </S.ButtonWrap>
      <S.CommentHeader>
        <Image
          width={24}
          height={24}
          src={require("../../../../public/image/ico_chatting_create.png")}
        />
        <span>댓글</span>
      </S.CommentHeader>
      <S.StarWrap>
        <Star starNum={3} />
      </S.StarWrap>
      <S.CommentInputWrap>
        <S.CommentInput
          type="text"
          id="comment"
          name="comment"
          required
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          onChange={({ target }) => setComment(target.value)}
          rows={5}
        />
        <S.CommentButtonWrap>
          <span>{comment.length}/100</span>
          <button onClick={submitComment}>등록하기</button>
        </S.CommentButtonWrap>
      </S.CommentInputWrap>
    </div>
  );
};
