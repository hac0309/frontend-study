import { styled } from "styled-components";
import YourCalendar from "./YourCalendar";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


function MainPage(props) {
  const { todos , onInsert } = props;
  return (
    <>
      <TodoHeader>
        <TodoInput onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoHeader>
    </>
  );
};

export default MainPage;