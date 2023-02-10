export default function Qqq() {
  // 타입추론
  let aaa = "안녕하세요";
  aaa = 3;

  // 타입명시
  let bbb: string = "반갑습니다";

  // 문자타입(선언과 할당 분리)
  let ccc: string;
  ccc = "반가워요!";
  ccc = 3;

  // 불린타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true로 작동함

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이", 10];
  let hhh = ["철수", "영희", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아봐도 된다
  let iii: (string | number)[] = ["철수", "영희", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아봐도 된다

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }
  const profile: IProfile = { name: "철수", age: 8, school: "초등학교" };
  profile.age = "8살";

  // 함수타입: 어디서든 몇번이든 호출가능하기 때문에 타입추론할 수 없음 (반드시 타입명시 필요)
  const funca = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  // 함수결과의 리턴타입 타입추론가능
  const funcResult = funca(1000, 2000, "원");

  // any타입
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;

  return <div></div>;
}
