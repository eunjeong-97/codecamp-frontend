import QQQ, {
  Body,
  Container,
  Header,
  Title,
  Button,
  ItemWrap,
  Label,
  Input,
} from "./BoardWrite.styles";
// import * as S from "./BoardWrite.styles";

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

export default function BoardWriteUI({
  setName,
  setPrice,
  setDetail,
  setSeller,
  onSubmit,
  btnColor,
  isNew,
}) {
  const type = isNew ? "등록" : "수정";
  return (
    <Body>
      <Container>
        <Header>
          <Title>상품{type}화면_setState</Title>
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
        {isNew && (
          <LabelInput
            label="판매자"
            placeholder="판매자을 입력해주세요."
            setState={setSeller}
          />
        )}
        <Button onClick={onSubmit} color={btnColor}>
          상품{type}하기
        </Button>
      </Container>
    </Body>
  );
}
