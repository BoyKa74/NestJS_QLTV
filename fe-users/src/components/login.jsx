import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/index.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Đăng nhập với Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>📚 Quản Lý Thư Viện</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVyceK1jGxdrraHRwMhOnoylXMhHoxtY8Xg&s" alt="Library" className="auth-img" />
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng nhập</button>
        </form>
        <p className="auth-switch">
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
