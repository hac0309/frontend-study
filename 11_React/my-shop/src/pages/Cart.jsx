import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCartList } from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";

function Cart() {
  const cartList = useSelector(selectCartList);
  // console.log(cartList);
  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map((cartItem,index) => <CartItem cartItem={cartItem} key={cartItem.id} index={index}/>)}
      </tbody>
    </Table>
    </>
  );
};

export default Cart;