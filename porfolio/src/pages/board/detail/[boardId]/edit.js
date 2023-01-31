import { useRouter } from "next/router";

export default () => {
  const { query } = useRouter();
  return <span>{query.boardId} 항목 내용수정페이지</span>;
};
