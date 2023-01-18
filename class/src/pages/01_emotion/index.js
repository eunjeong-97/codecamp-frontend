import { Container, Title, Label, Input, Button } from "@/styles/01_emotion";

export default function EmotionPage() {
  return (
    <Container>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <Input type="text" />

      <Label>비밀번호</Label>
      <Input type="password" />

      <Button onClick={() => window.alert("클릭!")}>클릭</Button>
    </Container>
  );
}
