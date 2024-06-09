import { useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";
// import { MdAdd } from "react-icon";


const TodoInputWrapper = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #ffe6a2;
  padding: 0.5rem;
  font-size: 30px;
  flex: 1;
  /* color: pink; */
  &::placeholder {
    color: #f6cc57;
  }
  `;

const StyledBtn = styled.button`
  background-color: #ffe6a2;
  font-size: 30px;
  width: 60px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background-color: #ffd666;
    color: #ffffff;
  }
`;

function TodoInput(props) {
  const { onInsert } = props;

  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // 빈값 이면 모달창 띄우기 만들기
    if (!value) {
      setShowModal(true);
      e.preventDefault();
    } else {
      e.preventDefault();
      onInsert(value);
      setValue('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <TodoInputWrapper onSubmit={handleSubmit}>
        <StyledInput type="text" value={value} placeholder="Todo..." onChange={handleInputChange}/>
        <StyledBtn type="submit">
          +
        </StyledBtn>
      </TodoInputWrapper>
      {showModal && <Modal onClose={closeModal} title="경고" content="빈값은 등록할 수 없습니다." showConfirmBtn  /> }
    </>
  );
};

export default TodoInput;