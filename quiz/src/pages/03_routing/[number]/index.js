import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";

import { colors, fonts } from "@/styles/globalStyle";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const LabelInput = ({ label, value }) => {
  return (
    <ItemWrap>
      <Label>{label}</Label>
      <Input>{value}</Input>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 50px 0 50px;
`;

const Label = styled.span`
  display: flex;
  flex: 2;
  font-family: ${fonts.regular};
  color: ${colors.gray03};
  font-size: 14px;
`;

const Input = styled.span`
  display: flex;
  flex: 5;
  padding: 10px;
  font-family: ${fonts.regular};
  color: ${colors.black};
  font-size: 16px;
  background-color: ${colors.gray06};
`;

export default () => {
  const {
    query: { number },
  } = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: number },
  });
  console.log(data);
  return (
    <Body>
      <Container>
        <Header>
          <Title>상품정보</Title>
        </Header>
        {data?.fetchProduct ? (
          <>
            <LabelInput label="상품명" value={data.fetchProduct.name} />
            <LabelInput label="가격" value={data.fetchProduct.price} />
            <LabelInput label="상품설명" value={data.fetchProduct.detail} />
            <LabelInput label="판매자" value={data.fetchProduct.seller} />
          </>
        ) : (
          <Loading>로딩중입니다...</Loading>
        )}
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

const Loading = styled.span`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.medium};
  font-size: 32px;
  color: ${colors.gray05};
`;
