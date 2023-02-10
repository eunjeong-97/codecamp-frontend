export default function TypescriptUtilityPage() {
  // 기존의 타입을 조작해서 커스텀타입을 만든다
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 1. Pick타입: 선택
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit타입: 제거
  type bbb = Omit<IProfile, "school">;

  // 3. Partial타입: 전체모두 선택가능
  type ccc = Partial<IProfile>;

  // 4. Required타입
  type ddd = Required<IProfile>;

  // 5. Recode타입
  type eee = "철수" | "영희" | "훈이"; // Union타입
  let child: eee;
  child = "짱구";

  type fff = Record<eee, IProfile>; // eee: IProfile 타입

  // type vs interface 차이: 선언병합가능여부
  interface IProfile {
    candy: number;
  }

  let profile: ccc = {};
  profile.candy = 10;
}
