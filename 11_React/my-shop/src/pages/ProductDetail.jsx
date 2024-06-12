import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";


import 'react-toastify/dist/ReactToastify.css'; // bootstrap CSS 추가
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가

import { clearSelectedProduct, getSelectedProduct, selectProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";


// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #e8f7fa; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 1s linear infinite;
`;


function ProductDetail() {
  const { productId } = useParams();
  // console.log(useParams());
  const [alert, setAlert] = useState(true);
  const [orderCount, setOrderCount] = useState(1);

  const dispatch = useDispatch(); // action 객체를 스토어에 전달해줌
  const product = useSelector(selectProduct);
  const fomatter = Intl.NumberFormat('ko-KR',{style:'currency', currency:'KRW'});

  
  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/hac0309/myshop/products/${productId}`);
        console.log(response);
        dispatch(getSelectedProduct(response.data))
        // setTimeout(() => {
        //   setAlert(false)
        // }, 2500);
        // 💨이렇게 써도 되고
      }
      catch (err) {
        console.error(err);
      }
    };
    fetchProductById()
    
    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화 (이전 상세페이지가 보이는거 막는 법)
    return () => {
      dispatch(clearSelectedProduct());
    }
  }, []);

  // 💨이렇게 따로 빼줘도 됨
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2500);

    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    }
  }, []);

  // product가 초기에 없을 때 오류가 뜨는것을 막아줌
  // + 밑에 옵셔널체이닝과 같은 효과
  // if (!product) {
  //   return null;
  // }

  const handleChangeOrderCount = (e) => {
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast.error('숫자만 입력하세요😓');
      return;
    }
    setOrderCount(Number(e.target.value));
  }

  return (
    <Container className="pt-3">
      {/* Alert을 띄우고 3초 뒤에 사라지게 만들기 
        (힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 + 조건부 렌더링)*/}
      {alert && <StyledAlert variant="info" onClose={() => setAlert(false)} dismissible >현재 309명이 이 상품을 보고 있습니다.</StyledAlert>}
      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{fomatter.format(product?.price)}원</p>

          <Col md={4} className="m-auto mb-3">
            {/* Quiz: text input을 제어 컴포넌트로 만들기 */}
            < Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant="primary" >주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
