import axios from "axios";
import React, { useState } from "react";

const ENDPOINT = "https://koreanjson.com/posts/1";

export default function RestGetPage() {
  const [title, setTitle] = useState("");
  async function onClickAsync(e) {
    // console.log('이벤트핸들러 함수', e)
    const { data } = await axios.get(ENDPOINT);
    console.log("동기요청", data);
    setTitle(data.title);
  }
  function onClockSync(e) {
    // console.log('이벤트핸들러 함수', e)
    const data = axios.get(ENDPOINT);
    console.log("비동기요청", data); // Promise
  }

  // function키워드를 사용해서 함수를 만들게 되면
  // 중복된 함수로 만들때 나중에 만들어진 함수로 대체될 수 있기 때문에 const로 함수를 만드는것이 좋다

  // 라이브러리를 10만이상 사용하면 쓸만하다!!
  return (
    <>
      <button onClick={onClickAsync}>REST API 동기요청</button>
      <button onClick={onClockSync}>REST API 비동기요청</button>
      <div>제목: {title}</div>
    </>
  );
}
