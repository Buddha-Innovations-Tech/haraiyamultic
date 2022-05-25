import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import CommiteeImage from "../../images/bimali.jpg";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";

const Cells = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <Container>
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                An Excellent foundation <br />
                for future success
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb contact-breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-item1">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    managment_commitee
                  </li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>
      <div className="first-container">
        <Container>
          <div className="about-list">
            <div className="bbs-list">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link bbs-navlist"
                    aria-current="page"
                  >
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/managment_commitee"
                    className="nav-link bbs-navlist"
                    href="managment.html"
                  >
                    Managment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/message" className="nav-link bbs-navlist">
                    Message
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/team" className="nav-link bbs-navlist">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cells" className="nav-link bbs-navlist">
                    Cells
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="cells-list">
            <div className="row">
              <div className="col-md-3">
                <ul className="nav flex-column cells-tabs">
                  <li className="nav-item cells-tabs-list">
                    <a className="nav-link active" aria-current="page" href="#">
                      IQAC
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Research and Publication Cell
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Student Councelling, feedback and Placement Cell
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Public Relation and Information Managment Cell
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Internal Examination Committee
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Extra-Curricular activites committee
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Library and ICT Managment Committee
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Emis Section
                    </a>
                  </li>
                  <li className="nav-item cells-tabs-lists">
                    <a className="nav-link" href="#">
                      Practice Teaching Committee
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <h1 className="cells-head">IQAC</h1>
                <div className="cells-team">
                  <div className="alumini-main1">
                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>
                  </div>

                  <div className="alumini-main">
                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>

                    <div className="alumini">
                      <img src={CommiteeImage} alt="" />
                      <p className="alumini-name">Bimal thapa</p>
                      <p className="alumini-position">Vice president</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cells;
