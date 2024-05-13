import { createGlobalStyle } from "styled-components";
import  reset, {Reset}  from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";


// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
  /* reset css */
  ${reset} /* 둘 중 하나만 해도 됨(reset) */

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      {/* 둘 중 하나만 해도 됨(reset) */}
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert/>
        <TodoList />
        {/* <div>투두 목록</div> */}
      </TodoTemplate>
    </>
  );
}

export default App;
