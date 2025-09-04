import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slices/authSlice"; // ✅ thunk import ediyoruz
import NavBar from "../../components/NavBar/NavBar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    // ✅ reducer değil, thunk dispatch edilecek
    dispatch(loginUser({ username, password }));
  };

  return (
    <div>
      <NavBar selectedButton="login" />
      <h1>Giriş Yap</h1>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş</button>
    </div>
  );
}

export default Login;
