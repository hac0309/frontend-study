import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function PropsUse() {
  return (
    <>
      <Profile
        // 키-값 쌍의 형태로 자식 컴포넌트에 props를 전달할 수 있음
        // 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {} 사용
        // 문자열은 {} 생략 가능
        // name(문자), introduction(문자), viewCount(숫자)
        name = "둘리" introduction = "반가워용" viewCount = {5}
      />
      <Profile name = "짱구" introduction = "호호잇" viewCount = {300}/>

      <Layout
        width={2560}
        height={1440}
        // props로 다른 컴포넌트를 넘기는 것도 가능
        header= {<Header title="반가워요 헤더여요"/>}
        footer= {<Footer/>}
      />
    </>
  );
}

export default PropsUse;