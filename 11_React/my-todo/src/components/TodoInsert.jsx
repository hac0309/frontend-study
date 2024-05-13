import { styled } from "styled-components";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀 때 한곳만 바꾸면 되서 편함
import { MdAdd as AddIcon } from "react-icons/md"; 

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #9abbdd;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기
  &::placeholder {
    color: #f1f1f1;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #d1ddfd;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: #bfcdf5;
  }
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert() {
  return (
    <TodoInsertWrapper>
      <StyledInput type="text" placeholder="할 일을 입력하세요."/>
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;