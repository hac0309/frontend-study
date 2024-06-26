// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 만듦

import axios from "axios";

// 상품 목록 조회

// 특정 상품 조회

// 상품 더보기
export const getMoreProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/hac0309/myshop/more-products');

    if (response.status === 200) { // 응답 코드가 200 Ok 일때만 결과를 리턴
      return response.data;
    } else { // 서버가 에러 코드 전송 시
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
  }
};
// 만약 서버로 데이터를 보내야 한다면??
// json-server 이용 시 테스트 가능
export const addProduct = async (product) => {
  try {
    const response = await axios.post('http://localhost:8080/board/register', { "no":0, "title":"제목~", "content":"내용~", "writer":"user" });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};