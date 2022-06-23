import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Unsplash from "../../images/college.png";
import BBS from "../../images/bbs.png";
import Notice from "../../images/notice.png";
import Person from "../../images/person.png";
import College from "../../images/haraiya-school.png";
import { ImQuotesLeft } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import gql from "graphql-tag";
import Query from "../../components/Query";
import Moment from "react-moment";
import { useEffect } from "react";
const Home = () => {
  const GET_ACADEMIC = gql`
    query NewQuery {
      academics {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          academic {
            description
          }
        }
      }
    }
  `;
  const GET_TESTIMONIALS = gql`
    query NewQuery($id: ID!) {
      pageBy(id: $id) {
        testimonialSlider {
          testimonial {
            name
            testimonialText
            year
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `;
  const GET_SLIDER = gql`
    query NewQuery($id: ID!) {
      pageBy(id: $id) {
        homeCarousel {
          image {
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `;
  const GET_NOTICE = gql`
    query NewQuery {
      notices {
        nodes {
          title
          date
          link
          slug
          notice {
            noticeImage {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
  const GET_EVENTS = gql`
    query NewQuery {
      events {
        nodes {
          date
          slug
          events {
            eventtype
            description
            title
            featuredimage {
              sourceUrl
            }
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Query query={GET_SLIDER} id={"cG9zdDozMDc="}>
        {({ data: { pageBy } }) => {
          return (
            <>
              <Carousel>
                {pageBy?.homeCarousel.image.map((b) => {
                  return (
                    <Carousel.Item interval={1800}>
                      <>
                        <div className="carousel-image-item">
                          <img src={b.image.sourceUrl} alt="" />
                          <div className="overlayhero"></div>
                        </div>
                        <Carousel.Caption>
                          <div className="content">
                            <h1 class="carousel-quotation">{b.title}</h1>

                            <Link
                              to="/admission_form"
                              className="btn btn-primary btn-admission mt-3"
                              role="button"
                            >
                              Admission Form
                            </Link>
                          </div>
                        </Carousel.Caption>
                      </>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </>
          );
        }}
      </Query>
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
      <Query query={GET_ACADEMIC}>
        {({ data: { academics } }) => {
          return (
            <>
              <div className="faculty">
                <Container>
                  <h1 className="faculty_heading">Our Faculty</h1>
                  <Row>
                    {academics.nodes.map((a) => {
                      return (
                        <>
                          <Col md={6}>
                            <div className="card faculty-card">
                              <img
                                className="card-img-top faculty-image"
                                src={a.featuredImage.node.sourceUrl}
                                alt="Card image cap"
                              />
                              <div className="card-body faculty-body">
                                <h5 className="card-title faculty-title">
                                  {a.title}
                                </h5>
                                <p
                                  className="card-text faculty-text"
                                  dangerouslySetInnerHTML={{
                                    __html: a.academic.description,
                                  }}
                                ></p>
                                <div className="bbs-btn">
                                  <Link
                                    to={`/academics/${a.slug}`}
                                    className="bbs-button"
                                  >
                                    Read More
                                    <BsArrowRight className="fa-solid fa-arrow-right ms-2" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </>
                      );
                    })}

                    {/* <Col md={6}>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Libero id nunc, purus et lacus. Non donec
                            mattis aliquam arcu risus nibh tristique felis nisi.
                            Rhoncus nisi ac interdum vel.
                          </p>
                          <div className="bbs-btn">
                            <Link to="/bed" className="bbs-button">
                              Read More
                              <BsArrowRight className="fa-solid fa-arrow-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col> */}
                  </Row>
                </Container>
              </div>
            </>
          );
        }}
      </Query>

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
              <Query query={GET_NOTICE}>
                {({ data: { notices } }) => {
                  return (
                    <>
                      {notices.nodes
                        .filter((i, index) => index < 3)
                        .map((curElm, index) => {
                          return (
                            <Col md={3}>
                              <div className="card">
                                <img
                                  className="card-img-top notice-img"
                                  src={curElm.notice.noticeImage.mediaItemUrl}
                                  alt="Card image cap"
                                />
                                <div className="card-body">
                                  <div className="card_notice">
                                    <div className="notice_cllg_name">
                                      <p>Haraiya Multiple Campus</p>
                                    </div>

                                    <div className="notice_date">
                                      <p>
                                        <i className="fa-solid fa-calendar"></i>
                                        <Moment format="YYYY-MM-DD">
                                          {curElm.date}
                                        </Moment>
                                      </p>
                                    </div>
                                  </div>
                                  <h5 className="notice-title">
                                    {curElm.title}
                                  </h5>

                                  <div className="btn-notices">
                                    <Link
                                      to={`/singlenotice/${curElm.slug}`}
                                      className="btn btn-primary btn-notice"
                                      role="button"
                                    >
                                      Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          );
                        })}
                    </>
                  );
                }}
              </Query>
              ]
              <Query query={GET_EVENTS}>
                {({ data: { events } }) => {
                  return (
                    <>
                      <Col md={3}>
                        <div className="events">
                          <div className="heading">
                            <h1 className="feature">Feature Events</h1>
                          </div>
                          {events.nodes
                            ?.filter((i, index) => index < 3)
                            .map((a) => {
                              return (
                                <>
                                  <div className="event-list mb-4">
                                    <Link
                                      to={`/event_description/${a.slug}`}
                                      class="event-link"
                                    >
                                      <div className="d-flex event">
                                        <img
                                          src={a.events.featuredimage.sourceUrl}
                                          alt="card img top"
                                          className="img-event pb-2"
                                        />
                                        <div className="event-info">
                                          <p className="event-title">
                                            {a.events.title}
                                          </p>
                                          <p className="event-calendar">
                                            <Moment format="YYYY-MM-DD">
                                              {a.date}
                                            </Moment>
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                      </Col>
                    </>
                  );
                }}
              </Query>
            </Row>
          </div>
        </div>
      </Container>

      {/*testomonials section */}
      <Query query={GET_TESTIMONIALS} id={"cG9zdDozMTQ="}>
        {({ data: { pageBy } }) => {
          return (
            <>
              <div className="testomonials">
                <Container>
                  <div className="testomonial-head">
                    <h1 className="testomonial_heading">Student Feedback</h1>
                  </div>
                  <div className="list_testomonial">
                    <Carousel>
                      {pageBy.testimonialSlider.testimonial.map((b) => {
                        return (
                          <Carousel.Item>
                            <>
                              <div className="testomonial">
                                <div className="testomonial-info">
                                  <ImQuotesLeft className="fa-solid fa-quote-left" />
                                  <p
                                    className="testomoinal-title"
                                    dangerouslySetInnerHTML={{
                                      __html: b.testimonialText,
                                    }}
                                  />
                                </div>
                                <div className="testomonial-body">
                                  <div className="testomonial_image">
                                    <img
                                      src={b.image.sourceUrl}
                                      className="student-image"
                                      alt="student"
                                    />
                                    <p className="student-name">{b.name}</p>
                                    <p className="student-year">{b.year}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                  </div>
                </Container>
              </div>
            </>
          );
        }}
      </Query>
      {/* fotter section */}
    </>
  );
};

export default Home;
