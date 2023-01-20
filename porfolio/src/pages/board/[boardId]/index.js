import { useRouter } from "next/router";

export default () => {
  const { query } = useRouter();
  return <span>{query.boardId} 항목 상세페이지</span>;
};
