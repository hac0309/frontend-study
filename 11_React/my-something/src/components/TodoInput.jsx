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

function TodoInput() {
  return (
    <TodoInputWrapper>
      <StyledInput type="text" placeholder="Todo..."/>
      <StyledBtn>
        +
      </StyledBtn>
    </TodoInputWrapper>
  );
};

export default TodoInput;