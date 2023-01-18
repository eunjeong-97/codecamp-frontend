import { useRouter } from "next/router";

export default function StaticRoutingBoardQuery() {
  const router = useRouter();
  const onClickMove = (id) => {
    if (!id) router.push("/03_routing/05_dynamic_routing_query");
    router.push(`/03_routing/04_static_routed_query/${id}`);
  };
  return (
    <div>
      <button onClick={() => onClickMove(0)}>useQuery 연습</button>
      <button onClick={() => onClickMove(1)}>1번게시글로 이동</button>
      <button onClick={() => onClickMove(2)}>2번게시글로 이동</button>
      <button onClick={() => onClickMove(3)}>3번게시글로 이동</button>
    </div>
  );
}
