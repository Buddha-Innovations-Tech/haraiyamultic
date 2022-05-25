import React from "react";
import BannerImage from "../../images/banner-image.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const BED_ADMISSION = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <Container>
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                BE.D (Bachelor in <br /> Education)
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb contact-breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/Home" className="breadcrumb-item1">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/bed" className="breadcrumb-item1">
                      BE.d
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    BE.d_Admission
                  </li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <div className="main-content">
        <Container>
          <div className="content-list">
            <div className="bbs-list">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    to="/bed"
                    className="nav-link bbs-navlist"
                    aria-current="page"
                  >
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bed_curicular" className="nav-link bbs-navlist">
                    Curricular Structure
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bed_admision" className="nav-link bbs-navlist">
                    Admission
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bed_grading" className="nav-link bbs-navlist">
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
                Students who have completed 10+2 or equivalent examinations
                securing minimum 'D+' grade in all subjects of Grade 11 and 12
                are eligible to enroll in B.Ed program of Tribhuvan University.
                <br />
                Or,
                <br /> Students with Higher Secondary Education Examination Pass
                Certificate (HSEEPC, hereafter only HSE) or Proficiency
                Certificate Level of Tribhuvan University (PCL) or equivalent to
                HSE/grade 12 pass are eligible for the admission in B.Ed
                programme.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BED_ADMISSION;
