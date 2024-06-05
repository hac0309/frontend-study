import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProduct } from "./productSlice";

function ProductList() {
  const [productList, setProductList] = useState(''); // input 초기값 state

  const dispath = useDispatch(); 

  const products = useSelector(selectProduct); // 가져오는

  const addHandle = () => {
    dispath(addToProductList(productList));
    setProductList('');
  }

  return (
    <>
      <p>
        상품추가:
        <input
          type="text" 
          value={productList}
          onChange={(e) => setProductList(e.target.value)}
        />
        <button 
          type="button"
          onClick={() => addHandle()}
        >
          추가
        </button>
      </p>
      <p>상품목록</p>
      <ul>
        {products.map((product, index) => {
          return <li key={index}>{product}</li>
        })}
      </ul>
    </>
  );
};

export default ProductList;