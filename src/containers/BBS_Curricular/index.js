import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import BannerImage from "../../images/banner-image.png";

const BBS_CURRICULALR = () => {
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
              <h1 className="BBS-curicular">Curricular Structure</h1>
            </div>
            <div className="BBS-curicular-content">
              <p className="bbs-content">
                The FOM recognizes the need for both breadth and depth in the
                total academic pattern. Therefore, the curriculum for BBS degree
                comprises four separate and distinct course components: .
              </p>
              <ol className="BBS-curicular-special">
                <li className="bbs-curicular-list">
                  A strong foundation allied areas of business such as language,
                  economic analysis, legal environment andquantitative method to
                  prepare graduates to understand, analyze and comprehend the
                  management concepts, theories and practices.
                </li>
                <li className="bbs-curicular-list">
                  Core business studies encompassing and integrating all
                  functional areas to provide graduates with andappreciation of
                  the diversity and inter-relationship of business and
                  management issues.
                </li>
                <li className="bbs-curicular-list">
                  The opportunity to concentrate in one area of specialization
                  such as accounting, finance, human resources management and
                  marketing in order to provide graduates with some degree of
                  functional expertise.
                </li>
              </ol>
            </div>

            <div className="first-years">
              <p className="first_year-head">The First Year Programme</p>
              <p className="first-year-titles">
                The purpose of the first year programme is to build a strong
                foundation in students to prepare them to comprehendthe business
                concepts, theories and practices. The first year programme is
                organized into the followingcompulsory and core courses:
              </p>
              <ul className="BBS-1st">
                <p className="bbs-firstyear">First Year (500)</p>
                <li className="bbs-firstyear-list">
                  MGT 201: Business English 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 202: Business Statistics 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 203: Microeconomics 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 211: Accounting for Financial Analysis 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 213: Principles of Management 100
                </li>
              </ul>
            </div>

            <div className="second-year">
              <p className="second_year-head">The Second Year Programme</p>
              <p className="first-year-titles">
                The purpose of the second year programme is to provide basic
                concepts, tools and understanding of thefoundation and core
                courses. The foundations courses are required to develop
                understand business practices. Thecore courses provide
                essentials of learning which are basic in the broad area of
                business studies. The second-year programme is therefore
                organized into the following core and compulsory courses:
              </p>
              <ul className="BBS-1st">
                <p className="bbs-firstyear">Second Year (500)</p>

                <li className="bbs-firstyear-list">
                  MGT 201: Business English 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 202: Business Statistics 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 203: Microeconomics 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 211: Accounting for Financial Analysis 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 213: Principles of Management 100
                </li>
              </ul>
            </div>

            <div className="third-year">
              <p className="third_year-head">The Third Year Programme</p>
              <p className="first-year-titles">
                The purpose of the third year programme is to provide basic
                concepts, tools and understanding of thefundamentals of business
                studies. The core courses provide essentials of learning which
                are basic to understandbroader area of business studies. The
                third programme is therefore organized into the following core
                andcompulsory courses:
              </p>
              <ul className="BBS-1st">
                <p className="bbs-firstyear">Third Year (500)</p>
                <li className="bbs-firstyear-list">
                  MGT 204: Business Law 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 215: Fundamentals of Financial Management 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 217: Business Environment and Strategy 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 218: Taxation and Auditing 100
                </li>
                <li className="bbs-firstyear-list">
                  MGT 219: Organizational Behavior 100
                </li>
              </ul>
            </div>

            <div className="fourth-year">
              <p className="fourth_year-head">The Fourth Year Programme</p>
              <p className="first-year-titles">
                In fourth year, the students are encouraged to focus on a
                particular functional and concentration area of business
                studies. Building on the foundation laid in the first, second
                and third years, the principal mission of the fourthyear
                twofold:
              </p>
              <ul className="BBS-1stYear">
                <p className="bbs-firstyear">Fourth Year (500)</p>

                <li className="bbs-firstyear-list">
                  MGT 220: Entrepreneurship and Enterprise Development 100
                </li>
                <li className="bbs-firstyear-list">Concentration I 100</li>
                <li className="bbs-firstyear-list">Concentration II 100</li>
                <li className="bbs-firstyear-list">Concentration III 100</li>
                <li className="bbs-firstyear-list">
                  MGT 221: Business Research Methods 50
                </li>
                <li className="bbs-firstyear-list">
                  MGT 401: Final Project 50
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default BBS_CURRICULALR;
