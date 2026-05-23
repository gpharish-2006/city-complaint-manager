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

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={3}
            maxLength={20}
            required
          />

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