import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import api from "../api/axios";
import { toast } from "react-toastify";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // New state to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      
      navigate("/");
      
      window.location.reload();
      toast.success("Login Successful");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        city,
        email,
        password,
      });

      setIsLogin(true);

      setName("");
      setCity("");
      setEmail("");
      setPassword("");

      toast.success("Registration Successful");

    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p>
          {
            isLogin
              ? "Login to continue"
              : "Register to continue"
          }
        </p>

        <div className="toggle-box">

          <button
            type="button"
            className={isLogin ? "active-btn" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>

          <button
            type="button"
            className={!isLogin ? "active-btn" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>

          {
            !isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )
          }

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
          
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {
            !isLogin && (
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            )
          }

          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={3}
              maxLength={10}
              required
              style={{ width: "100%", paddingRight: "40px" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              style={{
                position: "absolute",
                right: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                color: "#666"
              }}
            >
              {showPassword ? (
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                  <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                  <line x1="2" y1="2" x2="22" y2="22"/>
                </svg>
              ) : (
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
