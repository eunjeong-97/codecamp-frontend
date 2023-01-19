// 컴포넌트위에 만든 이유: 컴퓨넌트가 리렌더링되어도 다시 만들어지지 않음
const FRUITS = [
  { name: "레드향" },
  { name: "샤인머스켓" },
  { name: "산청딸기" },
  { name: "한라봉" },
  { name: "사과" },
  { name: "애플망고" },
  { name: "딸기" },
  { name: "천혜향" },
  { name: "과일선물세트" },
  { name: "귤" },
];

export default function MapFruits() {
  return (
    <div>
      {FRUITS.map((item, idx) => (
        <div
          key={String(idx)}
          style={{ backgroundColor: "wheat", marginBottom: 4 }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
