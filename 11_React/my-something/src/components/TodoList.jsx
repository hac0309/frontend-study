import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 24px;
  padding: 15px;
  /* border-bottom: 1px solid #f8d086; */
  color: #6f8fff;
  /* background-color: #f8ccfc; */
  /* border-radius: 5px; */
  text-align: center;
`;

const Lists = styled.div`
  height: 300px;
  overflow: auto;
  border: 1px dashed #ffda07;
  border-radius: 7px;
  margin: 20px 0;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff8d8;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffc507;
    border-radius: 3px;
  }
`;

function TodoList(props) {
  const { todos , onDelete, onCheck, onUpdate} = props;
  const falseTodos = todos.filter((todo) => !todo.done); 
  const trueTodos = todos.filter((todo) => todo.done);

  return (
    <TodoListWrapper>
      <Lists>
      <Title>오늘의 할 일</Title>
      {falseTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onUpdate={onUpdate}/>
      })}
      </Lists>
      <Lists>
      <Title>완료!</Title>
      {trueTodos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} onUpdate={onUpdate}/>
      })}
      </Lists>
    </TodoListWrapper>
  );
};

export default TodoList;