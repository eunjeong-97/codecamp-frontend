import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

// grapgQl 쿼리문
const CREATE_BOARD = gql`
  # 변수의 타입 적는 곳
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 실제 우리가 전달할 변수를 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String # 변수의 타입을 적는 곳
    $createProductInput: CreateProductInput! # !가 있으면 필수요소
  ) {
    # 살재 유라거 전달할 변수를 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

// 실무용 코드
export default function GraghqlMutationProduct() {
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  // const [createBoard] = useMutation(CREATE_PRODUCT);
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onSubmit = async () => {
    const {
      data: { createProduct },
      // } = await createBoard({
    } = await 나의함수({
      variables: { seller, createProductInput: { name, detail, price } },
    });
    console.log({ createProduct });
    const { _id, message } = createProduct;
    alert(`${_id}\n${message}`);
  };

  // e.target.value 해도 됨
  const onChangeSeller = ({ nativeEvent }) => setSeller(nativeEvent.data);
  const onChangeName = ({ nativeEvent }) => setName(nativeEvent.data);
  const onChangeDetail = ({ nativeEvent }) => setDetail(nativeEvent.data);
  const onChangePrice = ({ nativeEvent }) => setPrice(Number(nativeEvent.data));
  return (
    <>
      <input type="text" onChange={onChangeSeller} placeholder="판매자" />
      <input type="text" onChange={onChangeName} placeholder="상품 이름" />
      <input
        type="text"
        onChange={onChangeDetail}
        placeholder="상품 상세설명"
      />
      <input type="text" onChange={onChangePrice} placeholder="상품 가격" />
      <button onClick={onSubmit}>상품 등록하기</button>
    </>
  );
}
