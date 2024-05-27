import { styled } from "styled-components";
import YourCalendar from "./YourCalendar";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


function MainPage(props) {
  const { todos , onInsert , onDelete, onCheck, count, onUpdate ,selectedDate } = props;
  

  return (
    <>
      <TodoHeader count={count} selectedDate={selectedDate}>
        <TodoInput onInsert={onInsert} />
        <TodoList 
          todos={todos} 
          onDelete={onDelete} 
          onCheck={onCheck} 
          onUpdate={onUpdate}
          
        />
      </TodoHeader>
    </>
  );
};

export default MainPage;