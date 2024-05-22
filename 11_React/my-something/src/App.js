import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "./components/MyCalender";





const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*{
  font-family: 'MaplestoryOTFBold';
}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <MainPage/>
    {/* <MyCalendar/> */}
    </>
  );
}

export default App;
