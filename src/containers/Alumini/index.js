import React from "react";
import BannerImage from "../../images/banner-image.png";
import { Link } from "react-router-dom";
import AluminiImage from "../../images/bimali.jpg";
import { Row, Col, Container } from "react-bootstrap";

const Alumini = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <div className="container">
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                We'd love to hear from <br />
                you
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb contact-breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/Home" className="breadcrumb-item1">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    Alumini
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="contact">
          <h1 className="contact-head">Alumini</h1>
        </div>
        <div className="alumini-main1">
          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>

          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>

          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>
          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>
        </div>

        <div className="alumini-main1">
          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>

          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>

          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>

          <div className="alumini">
            <img src={AluminiImage} alt="" />
            <p className="alumini-name">Bimal thapa</p>
            <p className="alumini-position">Vice president</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Alumini;
