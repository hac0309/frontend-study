import { createSlice } from "@reduxjs/toolkit";
import ProductList from "./ProductList";

// 1. productSlice 
// - 상태 이름: product
// - 초기 상태: {
//   productList: []
// }
// - 리듀서: 상품 하나를 추가하는 addToProductList 정의

const productSlice = createSlice({
  name: 'product',
  initialState: {
    ProductList: []
  },
  reducers: {
    addToProductList: (state, action) => {
      state.ProductList.push(action.payload);
    }
  }
})

export const  {addToProductList}  = productSlice.actions;

export const selectProduct = state => state.product.ProductList;

export default productSlice.reducer;