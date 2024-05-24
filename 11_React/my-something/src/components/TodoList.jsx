import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`

`;

function TodoList(props) {
  const { todos , onDelete, onCheck, onUpdate} = props;

  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onUpdate={onUpdate}/>
      })}
    </TodoListWrapper>
  );
};

export default TodoList;