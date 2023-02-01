import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID!) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
export default function StaticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  useEffect(() => {
    if (!data?.fetchProduct) return;
    console.log("상품정보", data?.fetchProduct);
    const _date = data?.fetchProduct.createdAt;
    const year = _date.slice(0, 4);
    const month = _date.slice(5, 7);
    const date = _date.slice(8, 10);
    setSeller(data?.fetchProduct.seller);
    setName(data?.fetchProduct.name);
    setDetail(data?.fetchProduct.detail);
    setPrice(data?.fetchProduct.price);
    setCreatedAt(`${year}년 ${month}월 ${date}일`);
  }, [data]);
  return (
    <>
      {data?.fetchProduct ? (
        <div>
          판매자: {seller}
          <br />
          상품명: {name}
          <br />
          상세설명: {detail}
          <br />
          가격: {price}원
          <br />
          등록시간: {createdAt}
          <br />
          <button
            onClick={() =>
              router.push(`/06_products/${router.query.productId}/edit`)
            }
          >
            수정하기
          </button>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  );
}
