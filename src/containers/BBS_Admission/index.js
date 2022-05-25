import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";

const BBS_ADMISSION = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <div className="container">
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                BBS (Bachelor of Business <br /> Studies)
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
                    BBS
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <Container>
          <div className="content-list">
            <div className="bbs-list">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    to="/bbs"
                    className="nav-link bbs-navlist"
                    aria-current="page"
                  >
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bbs_curricular" className="nav-link bbs-navlist">
                    Curricular Structure
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bbs_admission" className="nav-link bbs-navlist">
                    Admission
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bbs_grading" className="nav-link bbs-navlist">
                    Examination and Grading System
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="BBS-content">
            <div className="BBS-heading">
              <h1 className="BBS_admission-curicular">
                Eligibility for Admission
              </h1>
            </div>
            <div className="BBS-curicular-content">
              <p className="bbs-content">
                The candidate applying for admission to the BBS programme:
              </p>
              <ul className="BBS-admission-special">
                <li className="bbs-admission-list">
                  Must have successfully completed the 10+2 in business/
                  commerce or an equivalent course from a Higher Secondary
                  School Board or from Tribhuvan University or from other
                  University/ Board recognized by T.U or must have studies
                  mathematics or economics as a full paper at the 10+2
                  programme.
                </li>
                <li className="bbs-admission-list">
                  Must have studied English as a full paper at the 10+2 or
                  equivalent programme.
                </li>
                <li className="bbs-admission-list">
                  Must have secured the minimum marks at the 10+2 or equivalent
                  programme as prescribed by the Faculty Board or campus
                  concerned.
                </li>
                <li className="bbs-admission-list">
                  Must satisfy any other entry requirements or criteria as
                  prescribed by the Faculty Board or the campus.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BBS_ADMISSION;
