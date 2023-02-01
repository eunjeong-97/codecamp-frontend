export default function BoardComponent({ isNew }) {
  const type = isNew ? "등록" : "수정";
  return (
    <>
      <h1>{type}페이지</h1>
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>{type}하기</button>
    </>
  );
}
