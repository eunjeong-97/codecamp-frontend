import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { colors } from "@/styles/globalStyle";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Title>포트폴리오 이동하기</Title>
      <Button onClick={() => router.push("/board/")}>게시판</Button>
      <OutsideBtn
        target="_blank"
        href="https://www.figma.com/file/rzmz45Zsp1OInmDhgqDUnL/%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-%EC%88%98%EC%97%85-%EA%B2%8C%EC%8B%9C%ED%8C%90?node-id=1%3A15&t=V3iHYBLw1VjsozpJ-0"
        rel="noreferrer"
      >
        게시판 디자인 피그마
      </OutsideBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${colors.gray05};
  border: none;
  margin: 10px 0;
  cursor: pointer;
`;

const OutsideBtn = styled.a`
  display: inline-block;
  padding: 10px;
  background-color: ${colors.gray05};
  color: ${colors.black};
  text-decoration: none;
`;

