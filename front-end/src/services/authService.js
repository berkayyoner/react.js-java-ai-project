import API from "./api";

export const login = async (username, password) =>
  (
    await API.post("/auth/login", null, { params: { username, password } })
).data;

export const register = async (username, password) =>
  (
    await API.post("/auth/register", null, { params: { username, password } })
).data;
