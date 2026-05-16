import { useState } from "react";
import "../styles/Login.css";

function Login() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p>
          {isLogin
            ? "Login to continue"
            : "Register to continue"}
        </p>

        {/* TAB BUTTONS */}

        <div className="toggle-box">

          <button
            className={isLogin ? "active-btn" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>

          <button
            className={!isLogin ? "active-btn" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

        </div>

        <form>

          {/* SIGNUP ONLY */}

          {!isLogin && (
            <input
              type="text"
              placeholder="Enter full name"
              className="form-control"
            />
          )}

          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
          />

          {!isLogin && (
            <input
              type="text"
              placeholder="Enter city"
              className="form-control"
            />
          )}

          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
          />

          <button className="login-btn">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;