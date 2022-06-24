import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Introduction from "../../images/introduction.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const About = () => {
  const GET_INTRODUCTION = gql`
    query NewQuery {
      abouts {
        nodes {
          about {
            introduction {
              introductiongroup {
                introductiondescription
                introductionimage {
                  sourceUrl
                }
              }
              introductions {
                goals {
                  goaltext
                  goalimage {
                    sourceUrl
                  }
                }
              }
              visionandmission {
                visiontext
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_INTRODUCTION} id={null}>
        {({ data: { abouts } }) => {
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

                  <h1 className="team-head">Introduction</h1>
                  <div className="haraiya-intro">
                    <div className="first-div">
                      <div className="row">
                        {abouts.nodes?.map((i) => {
                          return (
                            <>
                              <div className="col-md-6">
                                <p
                                  className="body-paragraph"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      i.about.introduction.introductions.goals
                                        .goaltext,
                                  }}
                                />
                                {/* {
                                    i.introduction.introductions
                                      .introductionGroup.introductionDescription
                                  } */}
                              </div>
                              <div className="col-md-1"></div>
                              <div className="col-md-5">
                                <img
                                  src={
                                    i?.about?.introduction?.introductions?.goals
                                      ?.goalimage?.sourceUrl
                                  }
                                  alt=""
                                  className="about-img"
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Container>
              </div>

              <div className="second-div">
                <Container>
                  <div className="row">
                    {abouts.nodes?.map((i) => {
                      return (
                        <>
                          <div className="col-md-6 order-md-1 order-sm-2 d-none d-md-block">
                            <img
                              src={
                                i?.about?.introduction?.visionandmission?.image
                                  ?.sourceUrl
                              }
                              alt=""
                              className="vision-img"
                            />
                          </div>
                          <div className="col-md-1 order-md-2"></div>
                          <div className="col-md-5 order-md-2 order-sm-1">
                            <h1 className="team-head">Vision and Mission</h1>
                            <div className="col-md-6 d-md-none">
                              <img
                                src={Introduction}
                                alt=""
                                className="vision-img"
                              />
                            </div>
                            <p
                              className="body-paragraph"
                              dangerouslySetInnerHTML={{
                                __html:
                                  i.about.introduction.visionandmission
                                    .visiontext,
                              }}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Container>
              </div>

              <div className="third-div">
                <div className="container">
                  <div className="goal-head">
                    <h1 className="team-head">Goal</h1>
                    <p className="goal-paragraph">
                      In the Post Modern era, a synonym for Globalization, every
                      institution wants to produce caliber and competent human
                      resources for the global market. So, in this context
                      Haraiya Multiple Campus has emphasized to accomplish the
                      following major goals:
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      {abouts.nodes?.map((i) => {
                        return (
                          <p
                            className="goal-list"
                            dangerouslySetInnerHTML={{
                              __html:
                                i.about.introduction.introductions.goals
                                  .goaltext,
                            }}
                          />
                        );
                      })}
                    </div>

                    <div className="col-md-6">
                      {abouts.nodes?.map((i) => {
                        return (
                          <div className="img-goal">
                            <img
                              src={
                                i?.about?.introduction?.introductions?.goals
                                  ?.goalimage?.sourceUrl
                              }
                              className="image-goal"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default About;
