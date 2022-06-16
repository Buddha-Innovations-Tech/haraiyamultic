import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Introduction from "../../images/introduction.png";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const Message = () => {
  const GET_MESSAGE = gql`
    query NewQuery {
      abouts {
        nodes {
          about {
            message {
              messagetext
              name
              post
              title
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
      <Query query={GET_MESSAGE}>
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
                            Message
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </Container>
                </div>
              </div>
              <div className="navtab-bg" style={{ backgroundColor: "#fafafa" }}>
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
                </div>
              </div>

              <div className="first-container  pt-3">
                <div className="container">
                  {abouts.nodes?.map((i) => {
                    return (
                      <>
                        {i.about.message.map((b) => {
                          return (
                            <>
                              <div className="message-campuschief">
                                <div className="row ">
                                  <h1 className="team-head">{b.title}</h1>
                                  <div className="col-md-3 nthselectorcss">
                                    <img
                                      src={b.image?.sourceUrl}
                                      alt=""
                                      className="img-campuschief"
                                    />
                                    <h1 className="chief-name">{b.name}</h1>
                                    <p className="chief-position">{b.post}</p>
                                  </div>
                                  <div className="col-md-9 leftspacing">
                                    <p
                                      className="campus-paragraph"
                                      dangerouslySetInnerHTML={{
                                        __html: b.messagetext,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Message;
