import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./BoardWrite.queries";
import { colors } from "../../../../styles/globalStyle";

interface IProps {
  isNew: boolean;
  productId: number;
}

export default function BoardWrite({ isNew, productId }: IProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [seller, setSeller] = useState("");
  const [createProductFunc] = useMutation(CREATE_PRODUCT);
  const [updateProductFunc] = useMutation(UPDATE_PRODUCT);
  const [color, setColor] = useState("");

  const onCreate = async () => {
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
      router.push({
        pathname: "/08_ts변경/[productId]",
        query: { productId: createProduct._id },
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) alert(error.message);
    }
  };

  const onUpdate = async () => {
    const updateProductInput = {};
    if (name) updateProductInput.name = name;
    if (price) updateProductInput.price = price;
    if (detail) updateProductInput.detail = detail;
    try {
      const {
        data: { updateProduct },
      } = await updateProductFunc({
        variables: {
          productId: router.query.productId,
          updateProductInput,
        },
      });
      alert(updateProduct.message);
      // 하위컴포넌트에서 router.push를 하게 되면 동작방법이 다른듯하다
      // router.push(`08_ts변경/${router.query.productId}`);
      router.push({
        pathname: "/08_ts변경/[productId]",
        query: { productId: updateProduct._id },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (name && price && detail && seller) setColor(colors.yellow);
    else setColor("");
  }, [name, price, detail, seller]);

  useEffect(() => {
    // 등록하기
    if (isNew) {
      if (name && price && detail && seller) {
        setColor(colors.yellow);
        return;
      }
      setColor("");
      return;
    }

    // 수정하기
    if (name && price && detail) {
      setColor(colors.yellow);
      return;
    }
    setColor("");
    return;
  }, [name, price, detail, seller, isNew]);

  return (
    <BoardWriteUI
      setName={setName}
      setPrice={setPrice}
      setDetail={setDetail}
      setSeller={setSeller}
      onSubmit={isNew ? onCreate : onUpdate}
      btnColor={color}
      isNew={isNew}
    />
  );
}
