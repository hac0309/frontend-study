import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`

`;

function TodoList(props) {
  const { todos } = props;

  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </TodoListWrapper>
  );
};

export default TodoList;