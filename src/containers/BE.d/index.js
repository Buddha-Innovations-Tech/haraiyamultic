import React from "react";
import BannerImage from "../../images/banner-image.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const BED = () => {
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
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    BE.d
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
              <h1 className="BBS-intro">Introduction</h1>
            </div>
            <div className="BBS-content">
              <p className="bbs-content">
                The objective of the BEd program of Tribhuvan University at the
                FOM is to develop students into competent managers for any
                sector of organized activity. The program is based on the
                principle that graduates will spend a major portion of their
                life in a constantly changing environment. Therefore, the
                student should have an opportunity to obtain a broad knowledge
                of the concepts and reality- based skills underlying the
                operation and management of organizations.
                <br />
                <br />
                Upon graduation, students should be equipped to function as a
                manager in business, industry and government. The graduate
                should also have a variety of career opportunities in different
                sectors of business including entrepreneurship and create much
                needed jobs for others.
              </p>

              <p className="bbs-title">
                The B.Ed program specially attempts to:
              </p>
              <ul className="BBS-special">
                <li>
                  Equip the students with the required conceptual knowledge of
                  business and administration to develop a general management
                  perspective in them.
                </li>
                <li>
                  Develop required attitudes, abilities and practical skill in
                  students, which constitute a foundation for the growth into
                  competent and responsible business managers.
                </li>
                <li>
                  Encourage entrepreneurial capabilities in students to make
                  them effective change agents in the Nepalese society.
                </li>
                <li>
                  Develop necessary foundation for higher studies in management
                  and thereafter take up careers in teaching, research and
                  consultancy.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BED;
