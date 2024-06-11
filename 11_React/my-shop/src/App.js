import { createGlobalStyle } from "styled-components";
import { Button,  Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";



// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  #root { // 실제 앱 만들 땐 그때그때 정렬하기 예제니까~~~~~~~~~편하게 할라고 하는거.......
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`; 

function App() {
  return (
    <>
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="outline-primary" size="lg">버튼</Button>{' '} */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary btn-lg">바튼</button> */}

      <GlobalStyle />

      {/* Quiz: Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
            <Route index element={<Main/>}/>
            {/* <Route path="detail" element={<ProductDetail/>}/> */}
            {/* Quiz: 상품별 상세페이지 여러 개를 라우팅하려면? URL 파라미터 사용
              예: /detail/1 로 접속하면 productId에 1이 담기도록 설정
            */}
            <Route path="detail/:productId" element={<ProductDetail/>}/>
          </Route>
        </Routes>


    </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/