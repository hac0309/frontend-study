import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prodictList: [],
  selectedProduct: null,
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {       // 이곳(productSlice)에서의 state
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.prodictList = action.payload;
    },
    getSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  }
});


// 액션 생성 함수
export const { getAllProducts, getSelectedProduct, clearSelectedProduct } = productSlice.actions;

// 선택자 함수                    // 전역스토어에 있는 전체 state 에서 그중 state 선택
export const selectProductList = (state) => state.product.prodictList;
export const selectProduct = (state) => state.product.selectedProduct;

// 리듀서 함수들
export default productSlice.reducer;
