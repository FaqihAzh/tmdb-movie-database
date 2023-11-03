import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  isRegister: "",
};

const authRegisterSlice = createSlice({
  name: "RegisterAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsRegistered: (state, action) => {
      state.isRegister = { ...state.isRegister, isRegister: action.payload };
    },
  },
});

const authRegisterReducer = authRegisterSlice.reducer;
export const { setToken, setIsRegistered } = authRegisterSlice.actions;

export default authRegisterReducer;
