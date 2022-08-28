import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import CommiteeImage from "../../images/bimali.jpg";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
import ScrollToTop from "../../components/ScrollToTop";
const Managment = () => {
  const GET_MANAGEMENT = gql`
    query NewQuery {
      abouts {
        nodes {
          about {
            management {
              name
              post
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <ScrollToTop />
      <Query query={GET_MANAGEMENT}>
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
                            managment_commitee
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

                  <h1 className="team-head">Managment Commitee</h1>
                  <div className="team">
                    <div className="alumini-main1">
                      {abouts.nodes?.map((i) => {
                        return (
                          <>
                            {i.about.management?.map((x) => {
                              return (
                                <>
                                  <div className="alumini">
                                    <img src={x?.image?.sourceUrl} alt="" />
                                    <p className="alumini-name">{x.name}</p>
                                    <p className="alumini-position">{x.post}</p>
                                  </div>
                                </>
                              );
                            })}
                          </>
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

export default Managment;
