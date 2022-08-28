import React, { useState } from "react";
import BannerImage from "../../images/banner-image.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";
const Contact = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://sajhamail.herokuapp.com/api/mail/message`, {
        name,
        phonenumber,
        email,
        message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <ScrollToTop />
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <Container>
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                We'd love to hear from <br />
                you
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb contact-breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#" className="breadcrumb-item1">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="contact">
          <h1 className="contact-head">Contact</h1>
        </div>
        <div className="row contact-details">
          <div className="col-md-6 order-2 order-sm-2 order-md-1">
            <div className="map">
              <h1 className="map-heading">Map</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9057039585214!2d83.24572561438195!3d27.596452936964983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f2b581e24d65%3A0x43a31cdcbb3f2168!2sHaraiya%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1649060356341!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="map-image"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 order-1 order-sm-1 order-md-2">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <h1 className="contact-title">Get in touch</h1>
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
                    Phone number <i className="fa-solid fa-star"></i>
                  </label>
                  <input
                    type="number"
                    className="form-control contact-placeholder"
                    placeholder="Enter phone number"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group contact-detail">
                  <label className="form-field">
                    Message <i className="fa-solid fa-star"></i>
                  </label>
                  <textarea
                    className="form-control contact-placeholder"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary contact-button"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
