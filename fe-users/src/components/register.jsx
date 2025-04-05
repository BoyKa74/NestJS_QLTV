import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/index.css"; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Đăng ký thành công! Xin chào ${name}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>📝 Đăng ký tài khoản</h2>
        <img src="https://via.placeholder.com/150" alt="Register" className="auth-img" />
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Tạo tài khoản</button>
        </form>
        <p className="auth-switch">
          Đã có tài khoản? <Link to="/">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
