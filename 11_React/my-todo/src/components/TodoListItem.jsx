import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdRemoveCircleOutline } from "react-icons/md";
import { css, styled } from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 짝수번째 배경색 지정 */
  &:nth-child(even) {
    background: #ecfcff;
  }

  /* 아이템 사이사이 위쪽 테두리 넣기 */
  & + & {
    border-top: 1px solid #d8d8d8;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.done && '#29cce6'}
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지

  /* 조건부 스타일링 시 여러 개의 css를 설정할 떄는 아래와 같이 사용 */
  ${props => props.done && 
    css`
      color: #7ca0c2;
      text-decoration: line-through;
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #c40404;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ffb71b;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #ff8787;
  }
`;

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌
function TodoListItem(props) {
  const { todo : { id, text, done } , onRemove } = props;

  return (
    <TodoListItemWrapper>
      <Checkbox done={done} >
        {done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text done={done}>{text}</Text>
      <Edit>
        <MdEdit />
      </Edit>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </Remove>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;