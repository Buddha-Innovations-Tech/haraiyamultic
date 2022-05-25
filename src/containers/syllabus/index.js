import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import syllabusLogo from "../../images/logo.webp";

const Syllabus = () => {
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
                    Syllabus
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div class="notices">
          <h1 class="syllabus-head">Syllabus</h1>
        </div>
        <div class="syllabus-list">
          <div class="row">
            <div class="col-md-6">
              <div class="bbs-list">
                <p class="syllabus-heading">
                  Bachelor of Business Studies( BBS)
                </p>
              </div>
              <div class="list-bbs">
                <div class="row gx-6 gy-5">
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">First Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">Second Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">Third Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus " />
                      <p class="syllabus">Fourth Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="bbs-list">
                <p class="syllabus-heading">Bachelor of Education ( B.Ed)</p>
              </div>
              <div class="list-bbs">
                <div class="row gx-6 gy-5">
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">First Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">Second Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">Third Year</p>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="first-year">
                      <i class="fa-solid fa-download"></i>
                      <img src={syllabusLogo} alt="" class="img-syllabus" />
                      <p class="syllabus">Fourth Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Syllabus;
