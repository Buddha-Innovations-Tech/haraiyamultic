import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Library from "../../images/library.jpg";
import Classroom from "../../images/classroom.png";
import Graduation from "../../images/graduation.png";
import Event from "../../images/events.png";
import Program from "../../images/program.png";

const Gallery = () => {
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
                    <Link to="/" className="breadcrumb-item1">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/photos" className="breadcrumb-item1">
                      Photos
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    Library
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div class="notices">
          <h1 class="notice-head">Library Photos</h1>
        </div>
        <div class="gallery-images">
          <div class="row gy-5">
            <div class="col-md-4">
              <div class="photo-list">
                <img src={Library} alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="photo-list">
                <img src={Classroom} alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="photo-list">
                <img src={Graduation} alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="photo-list">
                <img src={Event} alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="photo-list">
                <img src={Program} alt="" class="img-fluid" />
              </div>
            </div>

            <div class="col-md-4">
              <div class="photo-list">
                <img src={Graduation} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Gallery;
