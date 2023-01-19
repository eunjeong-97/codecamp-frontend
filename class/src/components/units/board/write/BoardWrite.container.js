import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function BoardWrite() {
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
      router.push(`03_routing/06_dynamic_routed_query/${createProduct._id}`);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      setName={setName}
      setPrice={setPrice}
      setDetail={setDetail}
      setSeller={setSeller}
      onSubmit={onSubmit}
    />
  );
}
