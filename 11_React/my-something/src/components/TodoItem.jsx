import { styled , css } from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";
import { useState } from "react";
import Modal from "./Modal";

const TodoItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Clear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size : 30px;
    color: ${props => props.done && '#ffe555'};
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 1rem;
  font-size: 30px;

  ${props => props.done &&
    css`
      color: grey;
      text-decoration: line-through;
    `
  }
`;


const Remove = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ff5353;
  
  svg {
    font-size: 32px;
  }

  &:hover {
    color: red
  }
  
`;

const Input = styled.input`
  flex: 1;
  margin-left: 1rem;
  font-size: 30px;
  padding: 0.5rem;
`;

function TodoItem(props) {

  const { todo , onDelete, onCheck, onUpdate } = props;
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [showModal, setShowModal] = useState(false);
  

  const handleContent = () => {
    if (!todo.done) { // todo.done = false
      setEdit(true);
    }
  };

  const handleInput = (e) => {
    setNewText(e.target.value);
  }

  const handleInputChange = () => {
    setEdit(false);
    if (newText.trim()) {
      onUpdate(todo.id, newText);
    } else {
      setNewText(todo.text);
    }
  }

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      handleInputChange();
    }
  }

  const handleConfirm = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <TodoItemWrapper>
      <Clear done={todo.done} onClick={()=>{onCheck(todo.id)}}>
        {todo.done ? <FaCheckCircle /> : <FaRegCheckCircle />}
      </Clear>
      {edit ? <Input value={newText} onChange={handleInput} onBlur={handleInputChange} autoFocus onKeyDown={handleInputEnter}/> : <Content done={todo.done} onClick={handleContent}>{todo.text} </Content> }
      <Remove onClick={handleConfirm}>
        {showModal && 
          <Modal title="삭제 확인" content="TodoList를 정말 삭제하시겠습니까?">
            <button type="button" className="btn-1" onClick={()=>onDelete(todo.id)}>확인</button>
            <button type="button" className="btn-2" onClick={()=>closeModal}>취소</button>
          </Modal>}
        <IoMdRemoveCircle/>
      </Remove>
    </TodoItemWrapper>
  );
};

export default TodoItem;