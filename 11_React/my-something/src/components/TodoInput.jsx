import { useState } from "react";
import { styled } from "styled-components";
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

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    // 빈값 이면 모달창 띄우기 만들기
  }

  return (
    <TodoInputWrapper>
      <StyledInput type="text" value={value} placeholder="Todo..." onChange={handleInputChange}/>
      <StyledBtn type="submit">
        +
      </StyledBtn>
    </TodoInputWrapper>
  );
};

export default TodoInput;