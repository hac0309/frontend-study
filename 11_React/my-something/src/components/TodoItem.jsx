import { styled } from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircle } from "react-icons/io";

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
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 1rem;
  font-size: 30px;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #705e00;

  svg {
    font-size: 26px;
  }

  &:hover {
    color: #4a3e00;
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

function TodoItem() {
  return (
    <TodoItemWrapper>
      <Clear>
        <FaRegCheckCircle />
        {/* <FaCheckCircle /> */}
      </Clear>
      <Content>밥먹기</Content>
      <Edit>
        <FaRegEdit/>
      </Edit>
      <Remove>
        <IoMdRemoveCircle/>
      </Remove>
    </TodoItemWrapper>
  );
};

export default TodoItem;