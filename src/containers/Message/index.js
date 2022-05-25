import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Introduction from "../../images/introduction.png";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";

const Message = () => {
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
                    Message
                  </li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>
      <div className="first-container">
        <div className="container">
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

          <h1 className="team-head">Message from Campous Chief </h1>
          <div className="message-campuschief">
            <div className="row">
              <div className="col-md-3">
                <img src={CampusChief} alt="" className="img-campuschief" />
                <h1 className="chief-name">Bimali Thapa</h1>
                <p className="chief-position">Campus Chief</p>
              </div>
              <div className="col-md-9">
                <p className="campus-paragraph">
                  Haraiya Multiple Campus (HMC) founded by distinguished
                  academicians and social activists in 2064 B.S. at Kanchan
                  Rural Municipality-3, Haraiya, and affiliated to Tribhuvan
                  University, Nepal, is proud to call itself one of the premier
                  community based academic institutions of the municipality. It
                  gives me immense pleasure to announce that HMC is in the
                  process to get certified with Quality Assurance and
                  Accreditation (QAA) by University Grants Commission Nepal.
                </p>
                <p className="campus-paragraph1">
                  The campus has been running two faculties with hundreds of
                  students and dedicated and hardworking teaching faculties and
                  non-teaching staffs offering a wide range of Bachelor's degree
                  programmes. The campus is dedicated to its mission to nurture
                  advanced-level graduates who will contribute to society by
                  pursuing knowledge and producing new generations of students.
                  Taking authentic consent from all the concerned ones, HMC is
                  dynamically moving forward for fulfilling its goal, mission,
                  and vision.
                </p>
                <p className="campus-paragraph2">
                  Our specialties lie in student-centred teaching-learning
                  pedagogy monitored and applied by our highly experienced and
                  well-trained faculties. We provide various physical
                  infrastructures with spacious classrooms, libraries
                  (e-libraries too), and playground.
                </p>
                <p className="campus-paragraph3">
                  Finally, I am indebted for the constant support of the
                  management board, administrative staffs, teaching faculties,
                  students, and our respected guardians who contributed hard to
                  gain this prestigious status of campus so far, I warmly
                  welcome the aspiring students and their guardians to visit our
                  campus administration and fulfill your queries time and again
                </p>
                <p className="campus-paragraph3">Thanks!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="message-chairman">
          <div className="container">
            <h1 className="team-head">Message from Chairman</h1>
            <div className="message-campuschief">
              <div className="row">
                <div className="col-md-9">
                  <p className="chairman-paragraph">
                    Haraiya Multiple Campus (HMC) founded by distinguished
                    academicians and social activists in 2064 B.S. at Kanchan
                    Rural Municipality-3, Haraiya, and affiliated to Tribhuvan
                    University, Nepal, is proud to call itself one of the
                    premier community based academic institutions of the
                    municipality. It gives me immense pleasure to announce that
                    HMC is in the process to get certified with Quality
                    Assurance and Accreditation (QAA) by University Grants
                    Commission Nepal.
                  </p>
                  <p className="chairman-paragraph1">
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
                  <p className="chairman-paragraph1">
                    Our specialties lie in student-centred teaching-learning
                    pedagogy monitored and applied by our highly experienced and
                    well-trained faculties. We provide various physical
                    infrastructures with spacious classNamerooms, libraries
                    (e-libraries too), and playground.
                  </p>
                  <p className="chairman-paragraph1">
                    Finally, I am indebted for the constant support of the
                    management board, administrative staffs, teaching faculties,
                    students, and our respected guardians who contributed hard
                    to gain this prestigious status of campus so far, I warmly
                    welcome the aspiring students and their guardians to visit
                    our campus administration and fulfill your queries time and
                    again
                  </p>
                  <p className="chairman-paragraph1">Thanks!</p>
                </div>
                <div className="col-md-3">
                  <img src={ChairPerson} alt="" className="img-chairman" />
                  <h1 className="chief-name">Bimali Thapa</h1>
                  <p className="chief-position">Chairperson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
