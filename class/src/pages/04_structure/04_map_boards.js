import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARDS = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default () => {
  const { data } = useQuery(FETCH_BOARDS); // 결과값은 데이터
  const [deleteBoard] = useMutation(DELETE_BOARDS); // 데이터를 변경할 함수
  const onDelete = async (e) => {
    const { data } = await deleteBoard({
      variables: { number: Number(e.target.id) },
      // 다시 fetch요청
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    alert(data.deleteBoard.message);
  };
  return (
    <>
      {data?.fetchBoards ? (
        <div>
          <Row top>
            <Column left>
              <input type="checkbox" />
            </Column>
            <Column>작성자</Column>
            <Column>제목</Column>
            <Column>내용</Column>
            <Column />
          </Row>
          {data.fetchBoards.map((item) => (
            // idx를 주게 되면 기존의 내용과 같은지 다른지 구분할 수 없어서, 변경된내용으로 업데이트 안될 수 잇다
            // 체크박스 체크하고 해당row 삭제해도 체크된 체크박스가 그대로 남아있음
            //
            <Row key={item.number}>
              <Column left>
                <input type="checkbox" />
              </Column>
              <Column>{item.writer}</Column>
              <Column>{item.title}</Column>
              <Column>{item.contents}</Column>
              <Column>
                <button id={item.number} onClick={onDelete}>
                  삭제
                </button>
              </Column>
            </Row>
          ))}
        </div>
      ) : (
        <span>로딩중입니다...</span>
      )}
    </>
  );
};

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  border-top: ${(props) => props.top && "1px solid black"};
`;
const Column = styled.div`
  border-right: 1px solid black;
  flex: 1;
  padding: 10px;
  border-left: ${(props) => props.left && "1px solid black"};
`;
