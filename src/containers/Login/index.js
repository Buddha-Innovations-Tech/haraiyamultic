import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("/api/users/signin", { email, password }, config)
      .then((res) => {
        if (res.data.token) {
          console.log(res.data.token);
          localStorage.setItem("user", res.data.token);
          localStorage.setItem("isAdmin", res.data.isAdmin);
        }
        navigate("/");
        setIsLoggedIn(true);
      })
      .catch((err) => setError(err.response.data.message));

    setPassword("");
    setEmail("");
  };
  return (
    <>
      <ScrollToTop />
      <div className="login-page">
        <div className="contact-form">
          {error && (
            <h6 style={{ color: "red" }} className="mt-3 ms-4">
              {error}
            </h6>
          )}

          <form onSubmit={handleLogin}>
            <h1 className="contact-title">Login</h1>
            <div className="form-group contact-detail">
              <label className="form-field">
                Email <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="email"
                className="form-control contact-placeholder"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group contact-detail">
              <label className="form-field">
                Password <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="password"
                className="form-control contact-placeholder"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary contact-button">
              Login
            </button>
            <p style={{ textAlign: "center", marginTop: "25px" }}>
              Didnot have an account ?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
