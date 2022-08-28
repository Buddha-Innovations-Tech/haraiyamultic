import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/api/users/register", { name, email, password }, config)
      .then((res) => navigate("/login"))
      .catch((err) => setError(err.response.data.msg));
    {
    }

    setEmail("");
    setPassword("");
    setName("");
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

          <form onSubmit={handleRegister}>
            <h1 className="contact-title">Register</h1>
            <div className="form-group contact-detail">
              <label className="form-field">
                Name <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="text"
                className="form-control contact-placeholder"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group contact-detail">
              <label className="form-field">
                Email <i className="fa-solid fa-star"></i>
              </label>
              <input
                type="email"
                className="form-control contact-placeholder"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <button
              type="submit"
              onClick={handleRegister}
              className="btn btn-primary contact-button"
            >
              Register
            </button>
            <p style={{ textAlign: "center", marginTop: "25px" }}>
              Have an account ?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
