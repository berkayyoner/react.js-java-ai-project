import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../slices/authSlice"; // ✅ thunk import ediyoruz

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
