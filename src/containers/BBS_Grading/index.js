import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";

const BBS_GRADING = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <Container>
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
                Examination and Grading System
              </h1>
            </div>
            <div className="BBS-grading-content">
              <p className="bbs-content">
                The final evaluation of students is done through the annual
                examination conducted by the office of the Controller of
                Examinations, Tribhuvan University. However for qualifying to
                aapear in the annual examinations, students must meet the
                following requirements:
              </p>
              <ul className="BBS_grading-special">
                <li className="bbs-curicular-list">
                  The student must have a minimum of 70 percent attendance of
                  the clasNamees actually held.
                </li>
                <li className="bbs-curicular-list">
                  No student will be allowed to appear in the second year final
                  examinations without first appearing in thefirst year final
                  examinations
                </li>
              </ul>
            </div>

            <div className="grading-system">
              <p className="grading-title">
                The grading system in the annual examinations is as follows:
              </p>
              <table className="grading-list">
                <tr>
                  <td>Third division</td>
                  <td>35 percent</td>
                </tr>

                <tr>
                  <td>Second division</td>
                  <td>45 percent</td>
                </tr>

                <tr>
                  <td>First division</td>
                  <td>60 percent</td>
                </tr>

                <tr>
                  <td>Distinction division</td>
                  <td>75 percent</td>
                </tr>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BBS_GRADING;
