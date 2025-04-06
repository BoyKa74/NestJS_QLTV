import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/index.css";

const LoginRegisterPage = () => {
  // State để theo dõi form nào đang được hiển thị (true: login, false: register)
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  // Hàm chuyển đổi giữa form đăng nhập và đăng ký
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="auth-container">
      {/* Box chính chứa cả hai phần form và social */}
      <div className="auth-box">
        {/* Form đăng nhập - chỉ hiển thị khi showLoginForm = true */}
        <div className={`login-form ${showLoginForm ? 'active' : 'inactive'}`}>
          {/* Phần tiêu đề được căn giữa */}
          <div className="form-header">
            <h2 className="form-title">Log in</h2>
            <p className="form-subtitle">to your account</p>
          </div>
          
          {/* Form nhập thông tin đăng nhập */}
          <form>
            <input
              type="text"
              placeholder="username"
              className="form-input"
            />
            <input
              type="password"
              placeholder="password"
              className="form-input"
            />
            <button
              type="submit"
              className="form-button"
            >
              LOG IN
            </button>
          </form>
          
          {/* Link quên mật khẩu */}
          <p className="forgot-password">
            Forgot password?
          </p>
        </div>

        {/* Form đăng ký - chỉ hiển thị khi showLoginForm = false */}
        <div className={`register-form ${!showLoginForm ? 'active' : 'inactive'}`}>
          {/* Phần tiêu đề được căn giữa */}
          <div className="form-header">
            <h2 className="form-title">Sign up</h2>
            <p className="form-subtitle">create your account</p>
          </div>
          
          {/* Form nhập thông tin đăng ký */}
          <form>
            <input
              type="text"
              placeholder="Full name"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email address"
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
            />
            <button
              type="submit"
              className="form-button"
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>

        {/* Phần đăng nhập bằng mạng xã hội - thay đổi ảnh nền dựa vào trạng thái */}
        <div className={`social-section ${showLoginForm ? 'login-bg' : 'register-bg'}`}>
          {/* Nội dung phần mạng xã hội - được giới hạn chiều rộng để cân đối với form bên trái */}
          <div className="social-content">
            <h2 className="form-title">
              {showLoginForm ? 'Sign in' : 'Sign up'}
            </h2>
            <p className="form-subtitle">
              with one of your social profiles
            </p>
            
            {/* Các nút mạng xã hội */}
            <div className="social-buttons">
              <button className="social-button facebook">f</button>
              <button className="social-button twitter">t</button>
              <button className="social-button google">g+</button>
            </div>
            
            {/* Link chuyển đổi giữa đăng nhập và đăng ký */}
            <p>
              {showLoginForm 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <span 
                onClick={toggleForm} 
                className="toggle-link"
              >
                {showLoginForm ? 'sign up' : 'log in'}
              </span>
            </p>
          </div>
        </div>
        
        {/* Nút chuyển đổi giữa hai form - nằm chính giữa hai phần */}
        <div className="toggle-button">
          <button 
            onClick={toggleForm}
            className={!showLoginForm ? 'rotated' : ''}
          >
            or
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage; 