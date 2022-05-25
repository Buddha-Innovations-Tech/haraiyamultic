import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Unsplash from "../../images/college.png";
import BBS from "../../images/bbs.png";
import Notice from "../../images/notice.png";
import Person from "../../images/person.png";
import College from "../../images/haraiya-school.png";
import { ImQuotesLeft } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* navbar section  */}

      {/* carousel */}

      <Carousel>
        <Carousel.Item interval={1800}>
          <div className="carousel-image-item">
            <div
              className="image"
              style={{
                background: `linear-gradient(
                  90.09deg,
                  rgba(0, 0, 0, 0.72) 0.09%,
                  rgba(0, 0, 0, 0.40) 99.94%
                ), url(${College}) no-repeat center center / cover`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt=""
                style={{ visibility: "hidden" }}
              />
              {/* <div className="carousel-content d-flex align-items-center w-100"></div> */}
            </div>
          </div>
          <Carousel.Caption>
            <div className="content">
              <h1 class="carousel-quotation">
                Reach higher. See further.
                <br />
                Shine Brighter.
              </h1>
              <Link
                to="/admission_form"
                className="btn btn-primary btn-admission mt-3"
                role="button"
              >
                Admission Form
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="carousel-image-item">
            <div
              className="image"
              style={{
                background: `linear-gradient(
                  90.09deg,
                  rgba(0, 0, 0, 0.72) 0.09%,
                  rgba(0, 0, 0, 0.40) 99.94%
                ), url(${College}) no-repeat center center / cover`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt=""
                style={{ visibility: "hidden" }}
              />
              {/* <div className="carousel-content d-flex align-items-center w-100"></div> */}
            </div>
          </div>
          <Carousel.Caption>
            <div className="content">
              <h1 class="carousel-quotation">
                Reach higher. See further.
                <br />
                Shine Brighter.
              </h1>
              <Link
                to="/admission_form"
                className="btn btn-primary btn-admission mt-3"
                role="button"
              >
                Admission Form
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1800}>
          <div className="carousel-image-item">
            <div
              className="image"
              style={{
                background: `linear-gradient(
                  90.09deg,
                  rgba(0, 0, 0, 0.72) 0.09%,
                  rgba(0, 0, 0, 0.40) 99.94%
                ), url(${College}) no-repeat center center / cover`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                alt=""
                style={{ visibility: "hidden" }}
              />
              {/* <div className="carousel-content d-flex align-items-center w-100"></div> */}
            </div>
          </div>
          <Carousel.Caption>
            <div className="content">
              <h1 class="carousel-quotation">
                Reach higher. See further.
                <br />
                Shine Brighter.
              </h1>
              <Link
                to="/admission_form"
                className="btn btn-primary btn-admission mt-3"
                role="button"
              >
                Admission Form
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* intosection */}
      <Container>
        <div class="section-info">
          <Row>
            <Col md={6}>
              <img src={Unsplash} alt="college" class="img-college" />
            </Col>
            <Col md={6}>
              <div class="college-info">
                <h1 class="college-heading">
                  Welcome to Haraiya
                  <br />
                  Campus
                </h1>
                <p class="college-paragraph">
                  Haraiya Multiple campus is a non-profit making educational
                  institution affiliated to Tribhuvan University, established in
                  2064 B.S. (2008) with the motto of disseminating quality
                  education basically to the students coming from
                  underprivileged and marginalized groups as well as
                  middle-class backgrounds at affordable cost. The campus offers
                  two programs: education and management streams.
                </p>

                <Link
                  to="/about"
                  class="btn btn-primary btn-readmore"
                  role="button"
                >
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* faculty section */}
      <div className="faculty">
        <Container>
          <h1 className="faculty_heading">Our Faculty</h1>
          <Row>
            <Col md={6}>
              <div className="card faculty-card">
                <img
                  className="card-img-top faculty-image"
                  src={BBS}
                  alt="Card image cap"
                />
                <div className="card-body faculty-body">
                  <h5 className="card-title faculty-title">
                    Bachelor of Business studies (BBS)
                  </h5>
                  <p className="card-text faculty-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Libero id nunc, purus et lacus. Non donec mattis aliquam
                    arcu risus nibh tristique felis nisi. Rhoncus nisi ac
                    interdum vel.
                  </p>
                  <div className="bbs-btn">
                    <button type="button" className="bbs-button">
                      Read More
                      <BsArrowRight className="fa-solid fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="card faculty-card">
                <img
                  className="card-img-top faculty-image"
                  src={BBS}
                  alt="Card image cap"
                />
                <div className="card-body faculty-body">
                  <h5 className="card-title faculty-title">
                    Bachelor of Education (BE.d)
                  </h5>
                  <p className="card-text faculty-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Libero id nunc, purus et lacus. Non donec mattis aliquam
                    arcu risus nibh tristique felis nisi. Rhoncus nisi ac
                    interdum vel.
                  </p>
                  <div className="bbs-btn">
                    <button type="button" className="bbs-button">
                      Read More
                      <BsArrowRight className="fa-solid fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*notice section */}
      <Container>
        <div className="notice">
          <div className="notice_head">
            <div className="notice_headling">
              <h1>Notice and Events</h1>
            </div>

            <div className="notice-btn">
              <Link to="/notice">
                <button type="button" className="btn-view-notice">
                  View All Notices
                  <BsArrowRight className="fa-solid fa-arrow-right ms-2" />
                </button>
              </Link>
            </div>
          </div>

          <div className="list_notice">
            <Row className="gx-3 gy-5">
              <Col md={3}>
                <div className="card">
                  <img
                    className="card-img-top notice-img"
                    src={Notice}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="card_notice">
                      <div className="notice_cllg_name">
                        <p>Haraiya Multiple campous</p>
                      </div>

                      <div className="notice_date">
                        <p>
                          <i className="fa-solid fa-calendar"></i>29 sep 2020
                        </p>
                      </div>
                    </div>
                    <h5 className="notice-title">
                      Examination form fil up Notice for BBS. Third Year - 2078
                    </h5>
                    <p className="notice-text">
                      Examination form fil up Notice for management student of
                      BBS Third Year 2078 .
                    </p>
                    <div className="btn-notices">
                      <Link
                        to="/notice"
                        className="btn btn-primary btn-notice"
                        role="button"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="card">
                  <img
                    className="card-img-top notice-img"
                    src={Notice}
                    alt="Card image cap "
                  />
                  <div className="card-body">
                    <div className="card_notice">
                      <div className="notice_cllg_name">
                        <p>Haraiya Multiple campous</p>
                      </div>

                      <div className="notice_date">
                        <p>
                          <i className="fa-solid fa-calendar"></i>29 sep 2020
                        </p>
                      </div>
                    </div>
                    <h5 className="notice-title">
                      Examination form fil up Notice for BBS. Third Year - 2078
                    </h5>
                    <p className="notice-text">
                      Examination form fil up Notice for management student of
                      BBS Third Year 2078 .
                    </p>
                    <div className="btn-notices">
                      <Link
                        to="/notice"
                        className="btn btn-primary btn-notice"
                        role="button"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="card">
                  <img
                    className="card-img-top notice-img"
                    src={Notice}
                    alt="Card image cap "
                  />
                  <div className="card-body">
                    <div className="card_notice">
                      <div className="notice_cllg_name">
                        <p>Haraiya Multiple campous</p>
                      </div>

                      <div className="notice_date">
                        <p>
                          <i className="fa-solid fa-calendar"></i>29 sep 2020
                        </p>
                      </div>
                    </div>
                    <h5 className="notice-title">
                      Examination form fil up Notice for BBS. Third Year - 2078
                    </h5>
                    <p className="notice-text">
                      Examination form fil up Notice for management student of
                      BBS Third Year 2078 .
                    </p>
                    <div className="btn-notices">
                      <Link
                        to="/notice"
                        className="btn btn-primary btn-notice"
                        role="button"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="events">
                  <div className="heading">
                    <h1 className="feature">Feature Events</h1>
                  </div>
                  <div className="event-list">
                    <Link to="/event" class="event-link">
                      <div className="d-flex event">
                        <img
                          src={Notice}
                          alt="card img top"
                          className="img-event"
                        />
                        <div className="event-info">
                          <p className="event-title">
                            Entrance exam for freshers students 2077
                          </p>
                          <p className="event-calendar">29 sep 2020</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="event-list mt-3">
                    <Link to="/event" class="event-link">
                      <div className="d-flex event">
                        <img
                          src={Notice}
                          alt="card img top"
                          className="img-event"
                        />
                        <div className="event-info">
                          <p className="event-title">
                            Entrance exam for freshers students 2077
                          </p>
                          <p className="event-calendar">29 sep 2020</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="event-list mt-3">
                    <Link to="/event" class="event-link">
                      <div className="d-flex event">
                        <img
                          src={Notice}
                          alt="card img top"
                          className="img-event"
                        />
                        <div className="event-info">
                          <p className="event-title">
                            Entrance exam for freshers students 2077
                          </p>
                          <p className="event-calendar">29 sep 2020</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="event-list mt-3">
                    <Link to="/event" class="event-link">
                      <div className="d-flex event">
                        <img
                          src={Notice}
                          alt="card img top"
                          className="img-event"
                        />
                        <div className="event-info">
                          <p className="event-title">
                            Entrance exam for freshers students 2077
                          </p>
                          <p className="event-calendar">29 sep 2020</p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="event-last mt-3">
                    <Link to="/event" class="event-link">
                      <div className="d-flex event">
                        <img
                          src={Notice}
                          alt="card img top"
                          className="img-event"
                        />
                        <div className="event-info">
                          <p className="event-title">
                            Entrance exam for freshers students 2077
                          </p>
                          <p className="event-calendar">29 sep 2020</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      {/*testomonials section */}

      <div className="testomonials">
        <Container>
          <div className="testomonial-head">
            <h1 className="testomonial_heading">Student Feedback</h1>
          </div>
          <div className="list_testomonial">
            <Carousel>
              <Carousel.Item interval={1800}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={1800}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={1800}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* <div className="list_testomonial">
            <Row className="gy-5">
              <Col md={4}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={4}>
                <div className="testomonial">
                  <div className="testomonial-info">
                    <ImQuotesLeft className="fa-solid fa-quote-left" />
                    <p className="testomoinal-title">
                      Lorem ipsum dolor sit amet, conse cte tur adipiscing elit.
                      Viverra dui orna re morbi lectus purus enim sagit tis, ac.
                      Sit augue ipsum donec nulla eget lacus. Pellentesque
                      facilisi metus cursus
                    </p>
                  </div>
                  <div className="testomonial-body">
                    <div className="testomonial_image">
                      <img
                        src={Person}
                        className="student-image"
                        alt="student"
                      />
                      <p className="student-name">Sagar Gharti</p>
                      <p className="student-year">BSC 3rd year</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div> */}
        </Container>
      </div>

      {/* fotter section */}
    </>
  );
};

export default Home;
