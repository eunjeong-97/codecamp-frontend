// 상품 등록 화면: 판매자, 상품명, 상품내용, 상품가격 -> 상품등록하면 상세화면 화면으로 이동
// 상품상세화면: 상품정보조회
import React, { useState } from "react";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";

import { colors, fonts } from "@/styles/globalStyle";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

const LabelInput = ({ type = "text", setState, placeholder, label }) => {
  return (
    <ItemWrap>
      <Label>{label}</Label>
      <Input
        type={type}
        onChange={({ nativeEvent: { target } }) => setState(target.value)}
        placeholder={placeholder}
      />
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Label = styled.span`
  display: flex;
  flex: 2;
  font-family: ${fonts.regular};
  color: ${colors.gray03};
  font-size: 14px;
`;

const Input = styled.input`
  display: flex;
  flex: 5;
  padding: 10px;
`;

export default () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [seller, setSeller] = useState("");
  const [createProductFunc] = useMutation(CREATE_PRODUCT);

  const onSubmit = async () => {
    if (!name || !price || !detail || !seller) {
      alert("상품정보를 전부 입력해주세요.");
      return;
    }
    try {
      const {
        data: { createProduct },
      } = await createProductFunc({
        variables: { seller, createProductInput: { name, price, detail } },
      });
      alert(createProduct.message);
      router.push(`03_routing/${createProduct._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Body>
      <Container>
        <Header>
          <Title>상품등록화면</Title>
        </Header>
        <LabelInput
          label="상품명"
          placeholder="상품명을 입력해주세요."
          setState={setName}
        />
        <LabelInput
          label="가격"
          placeholder="가격을 입력해주세요."
          setState={(value) => setPrice(Number(value))}
        />
        <LabelInput
          label="상품설명"
          placeholder="상품설명을 입력해주세요."
          setState={setDetail}
        />
        <LabelInput
          label="판매자"
          placeholder="판매자을 입력해주세요."
          setState={setSeller}
        />
        <Button onClick={onSubmit}>상품등록하기</Button>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray06};
`;

const Container = styled.div`
  background-color: ${colors.white};
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;
const Header = styled.div`
  background-color: ${colors.gray05};
  padding: 10px;
  margin-bottom: 40px;
`;
const Title = styled.p`
  font-family: ${fonts.bold};
  font-size: 40px;
  color: ${colors.black};
`;
const Button = styled.button`
  align-items: center;
  width: 40%;
  padding: 10px;
  margin: 40px auto 0 auto;
  border: none;
  background-color: ${colors.gray05};
  color: ${colors.black};
  font-family: ${fonts.medium};
`;
