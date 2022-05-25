import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Introduction from "../../images/introduction.png";

const About = () => {
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
                    Introduction
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
                <li className="nav-item ">
                  <Link
                    to="/about"
                    className="nav-link bbs-navlist active"
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

          <h1 className="team-head">Introduction</h1>
          <div className="haraiya-intro">
            <div className="first-div">
              <div className="row">
                <div className="col-md-6">
                  <p className="body-paragraph">
                    Haraiya Multiple campus is a non-profit making educational
                    institution affiliated to Tribhuvan University, established
                    in 2064 B.S. (2008) with the motto of disseminating quality
                    education basically to the students coming from
                    underprivileged and marginalized groups as well as
                    middle-className backgrounds at affordable cost. The campus
                    offers two programs: education and management streams.
                  </p>
                  <p className="body-paragraph2">
                    The campus has been running two faculties with hundreds of
                    students and dedicated and hardworking teaching faculties
                    and non-teaching staffs offering a wide range of Bachelor’s
                    degree programmes. The campus is dedicated to its mission to
                    nurture advanced-level graduates who will contribute to
                    society by pursuing knowledge and producing new generations
                    of students. Taking authentic consent from all the concerned
                    ones, HMC is dynamically moving forward for fulfilling its
                    goal, mission, and vision.
                  </p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <img src={Introduction} alt="" className="about-img" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="second-div">
        <Container>
          <div className="row">
            <div className="col-md-6 order-md-1 order-sm-2 d-none d-md-block">
              <img src={Introduction} alt="" className="vision-img" />
            </div>
            <div className="col-md-1 order-md-2"></div>
            <div className="col-md-5 order-md-2 order-sm-1">
              <h1 className="team-head">Vision and Mission</h1>
              <div className="col-md-6 d-md-none">
                <img src={Introduction} alt="" className="vision-img" />
              </div>
              <p className="body-paragraph">
                To educate individuals to become intellectually enlightened,
                professionally capable, morally upright, and socially committed
                and give a meaningful contribution to the development of the
                global Community.
              </p>
              <p className="body-paragraph2">
                Our mission is to equip young men and women with knowledge and
                skills by imparting value-based education and fostering the
                right attitude, good character, and human values. HMC will be
                determined to prepare graduates to contribute in the field of
                research which ultimately serves a global society that is
                increasingly focused on change.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="third-div">
        <div className="container">
          <div className="goal-head">
            <h1 className="team-head">Goal</h1>
            <p className="goal-paragraph">
              In the Post Modern era, a synonym for Globalization, every
              institution wants to produce caliber and competent human resources
              for the global market. So, in this context Haraiya Multiple Campus
              has emphasized to accomplish the following major goals:
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul className="goal-list">
                <li className="goal-list2">
                  To bring out educationally skilful, knowledgeable, dynamic,
                  technically sound, and excellent research-oriented human
                  resources to fulfill the needs of modern society and nation.
                </li>
                <li className="goal-list2">
                  To enhance the access of quality education among girls, remote
                  /village areas people, educationally disadvantaged Janajatis,
                  Dalit, marginalized and needy people.
                </li>
                <li className="goal-list2">
                  To add various academic courses, streams, levels, and
                  institutions to provide general, vocational, technical, and
                  practical education as per the requirement of the community
                </li>
                <li className="goal-list2">
                  To enhance the creative and critical ability of the students
                  through different co-curricular and extracurricular
                  activities.
                </li>
                <li className="goal-list2">
                  To enrich the library with different kinds of books and
                  resources to broaden the knowledge and skills of the faculties
                  and students.
                </li>
                <li className="goal-list2">
                  To enrich the library with different kinds of books and
                  resources to broaden the knowledge and skills of the faculties
                  and students.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="img-goal">
                <img src={Introduction} className="image-goal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
