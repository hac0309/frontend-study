import { styled } from "styled-components";
import YourCalendar from "./YourCalendar";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


function MainPage() {
  return (
    <>
      <TodoHeader>
        <TodoInput/>
        <TodoList/>
      </TodoHeader>
    </>
  );
};

export default MainPage;