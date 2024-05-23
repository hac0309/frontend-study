import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "./components/MyCalender";
import YourCalendar from "./components/YourCalendar";
import TodoHeader from "./components/TodoHeader";





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
  return (
    <>
    <GlobalStyle/>
    <YourCalendar/>
    <MainPage/>
    {/* <TodoHeader/> */}
    </>
  );
}

export default App;
