import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.div`
  font-size: 24px;
  padding: 15px;
  /* border-bottom: 1px solid #f8d086; */
  color: #6f8fff;
  /* background-color: #f8ccfc; */
  border-radius: 5px;
`;

function TodoList(props) {
  const { todos , onDelete, onCheck, onUpdate} = props;
  const falseTodos = todos.filter((todo) => !todo.done); 
  const trueTodos = todos.filter((todo) => todo.done);

  return (
    <TodoListWrapper>
      <Title>오늘의 할 일</Title>
      {falseTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onUpdate={onUpdate}/>
      })}
      <Title>완료!</Title>
      {trueTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onUpdate={onUpdate}/>
      })}
    </TodoListWrapper>
  );
};

export default TodoList;