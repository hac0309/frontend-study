import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProduct, selectProduct } from "../features/product/productSlice";

export function ProductDetail() {
  const { productId } = useParams();
  // console.log(useParams());

  const dispatch = useDispatch(); // action 객체를 스토어에 전달해줌
  const detailItem = useSelector(selectProduct);

  const fomatter = Intl.NumberFormat('ko-KR',{style:'currency', currency:'KRW'});
  
  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/hac0309/myshop/products/${productId}`);
        console.log(response);
        dispatch(getSelectedProduct(response.data))
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();
  }, []);

  return (
    <Container className="pt-3">
      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={detailItem.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{detailItem.title}</h4>
          <p>{detailItem.content}</p>
          <p>{fomatter.format(detailItem.price)}원</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
