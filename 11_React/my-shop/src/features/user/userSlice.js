import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

// 로그인한 유저 정보를 담을 slice 만들기
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload : user }) => { // 받아온 정보 저장
      state.user = user;
    },
    logoutSuccess: (state) => { // 다시 null 값으로 초기화
      state.user = null;
      localStorage.removeItem('user');
    }
  }
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

                        // 전체 전역상태를 의미함
export const selectUser = state => state.user.user;

export default userSlice.reducer;