import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`

`;

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoItem/>
    </TodoListWrapper>
  );
};

export default TodoList;