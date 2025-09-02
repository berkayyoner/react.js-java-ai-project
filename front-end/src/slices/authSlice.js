import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../services/authService";

export const loginUser = createAsyncThunk("auth/login", async (c) => {
  const data = await login(c.username, c.password);
  localStorage.setItem("token", data.token);
  return data;
});
export const registerUser = createAsyncThunk("auth/register", register);

const slice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") || null },
  reducers: {
    logout: (s) => { localStorage.removeItem("token"); s.token = null; }
  },
  extraReducers: (b) => { b.addCase(loginUser.fulfilled, (s, a) => { s.token = a.payload.token }) }
});
export const { logout } = slice.actions;
export default slice.reducer;