import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/03_routing/02_static_routed");
  };
  return <button onClick={onClickMove}>Static Routing</button>;
}
