import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import CommiteeImage from "../../images/bimali.jpg";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";

const Team = () => {
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

          <h1 className="team-head">Teaching Staff</h1>
          <div className="team">
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

            {/* <div className="alumini-main">
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
            </div> */}
          </div>
        </Container>

        <div className="non-teaching">
          <Container>
            <h1 className="team-head">Non-Teaching Staff</h1>
            <div className="team">
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

              {/* <div className="alumini-main">
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
              </div> */}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Team;
