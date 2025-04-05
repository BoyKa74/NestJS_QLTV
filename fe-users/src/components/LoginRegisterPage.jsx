import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginRegisterPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#2c3e50',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        maxWidth: '900px',
        height: '500px',
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
      }}>
       

        {/* Login Form */}
        <div style={{
          flex: 1,
          padding: '40px 30px 40px 90px',
          display: showLoginForm ? 'block' : 'none'
        }}>
          <h2 style={{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#333'
          }}>Log in</h2>
          <p style={{ 
            color: '#777', 
            marginBottom: '25px' 
          }}>to your account</p>
          
          <form>
            <input
              type="text"
              placeholder="username"
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '25px',
                fontSize: '16px'
              }}
            />
            <input
              type="password"
              placeholder="password"
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '25px',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#337095',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              LOG IN
            </button>
          </form>
          
          <p style={{
            marginTop: '20px',
            color: '#999',
            textAlign: 'center',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
            Forgot password?
          </p>
        </div>

        {/* Registration Form */}
        <div style={{
          flex: 1,
          padding: '40px 30px 40px 90px',
          display: !showLoginForm ? 'block' : 'none'
        }}>
          <h2 style={{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#333'
          }}>Sign up</h2>
          <p style={{ 
            color: '#777', 
            marginBottom: '25px' 
          }}>create your account</p>
          
          <form>
            <input
              type="text"
              placeholder="Full name"
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '25px',
                fontSize: '16px'
              }}
            />
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '25px',
                fontSize: '16px'
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '25px',
                fontSize: '16px'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#337095',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>

        {/* Social Login Section */}
        <div style={{
          flex: 1,
          backgroundColor: '#1e2a38',
          backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 30px'
        }}>
          <div style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              {showLoginForm ? 'Sign in' : 'Sign up'}
            </h2>
            <p style={{ marginBottom: '30px' }}>
              with one of your social profiles
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '30px'
            }}>
              <button style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#3b5998',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>f</button>
              
              <button style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#1da1f2',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>t</button>
              
              <button style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#db4437',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>g+</button>
            </div>
            
            <p>
              {showLoginForm 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <span 
                onClick={toggleForm} 
                style={{
                  color: 'white',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {showLoginForm ? 'sign up' : 'log in'}
              </span>
            </p>
          </div>
        </div>
        
        {/* Toggle Button */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button 
            onClick={toggleForm}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              border: 'none',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#555'
            }}
          >
            or
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage; 