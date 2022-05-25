import React from "react";
import BannerImage from "../../images/banner-image.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const BED_GRADING = () => {
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
                    BE.d_Grading
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
                Examination and Grading System
              </h1>
            </div>
            <div className="BBS-grading-content">
              <p className="bbs-content">
                Four-year B.Ed. with annual examination system is a professional
                as well as an academic program designed for preparing competent
                teachers who can teach two subjects at the secondary level.
              </p>
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
export default BED_GRADING;
