import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import './App.css';
import MainPage from "./components/MainPage";
import "react-calendar/dist/Calendar.css";
import YourCalendar from "./components/YourCalendar";
import { useState } from "react";
import { v4 as uuid } from "uuid";



const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  font-family: 'MaplestoryOTFBold';
}
`;



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '정처기 끝장나게 보기~ (실패..)',
      done: false
    },
    {
      id: 2,
      text: '끝내주게 숨쉬기',
      done: true
    },
    {
      id: 3,
      text: '강쥐들과 끝장나는 산책하기',
      done: false
    }
  ]);

  const handleInsert = (text) => {
    const todo = {
      id: uuid(),
      text,
      done: false
    };

    setTodos(todos.concat(todo));
  }

  

  return (
    <>
    <GlobalStyle/>handleInsert
    <YourCalendar/>
    <MainPage todos={todos} onInsert={handleInsert}/>
    {/* <TodoHeader/> */}
    </>
  );
}

export default App;
