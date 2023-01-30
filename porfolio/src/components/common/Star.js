import Image from "next/image";
import styled from "@emotion/styled";
import active from "../../../public/image/ico_star_active.png";
import inActive from "../../../public/image/ico_star_inActive.png";

export default ({ starNum = 0 }) => (
  <Container>
    <Image width={24} height={24} src={1 <= starNum ? active : inActive} />
    <Image width={24} height={24} src={1 < starNum ? active : inActive} />
    <Image width={24} height={24} src={2 < starNum ? active : inActive} />
    <Image width={24} height={24} src={3 < starNum ? active : inActive} />
    <Image width={24} height={24} src={4 < starNum ? active : inActive} />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;
