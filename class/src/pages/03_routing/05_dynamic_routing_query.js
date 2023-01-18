import { useRouter } from "next/router";
export default function DynamicRoutingBoardQuery() {
  const router = useRouter();
  const onClickMove = (idx) =>
    router.push(`/03_routing/06_dynamic_routed_query/${idx}`);

  return (
    <div>
      <button onClick={() => onClickMove(1)}>1번게시물로 이동</button>
      <button onClick={() => onClickMove(2)}>2번게시물로 이동</button>
      <button onClick={() => onClickMove(3)}>3번게시물로 이동</button>
    </div>
  );
}
