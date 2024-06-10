import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prodictList: [],
  selectedProduct: null
};

// 상품 정보를 담을 slice 만들기
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      console.log(action.payload);
      state.prodictList = action.payload;
    }
  }
});

// 리듀서 함수들
export default productSlice.reducer;

// 액션 생성 함수
export const { getAllProducts } = productSlice.actions;
