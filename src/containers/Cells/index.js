import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import CommiteeImage from "../../images/bimali.jpg";
import CampusChief from "../../images/campus_chief.png";
import ChairPerson from "../../images/campus_chief.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const Cells = () => {
  const [cell, setCell] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const GET_CELLS = gql`
    # query NewQuery {
    #   abouts {
    #     nodes {
    #       introduction {
    #         cells {
    #           title
    #           data {
    #             name
    #             post
    #             image {
    #               sourceUrl
    #             }
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
    query NewQuery {
      abouts {
        nodes {
          about {
            cells {
              title
              data {
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
    }
  `;
  const cellHandle = (celltitle, celldata) => {
    setCell(celldata);
    setTitle(celltitle);
  };

  return (
    <>
      <Query query={GET_CELLS}>
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
                          {abouts.nodes?.map((i) => {
                            return (
                              <>
                                {i.about.cells.map((x) => {
                                  return (
                                    <li
                                      className="nav-item cells-tabs-list"
                                      onClick={() => {
                                        setLoading(false);
                                        cellHandle(x.title, x.data);
                                      }}
                                    >
                                      {x.title}
                                    </li>
                                  );
                                })}
                              </>
                            );
                          })}
                        </ul>
                      </div>
                      {loading && (
                        <div className="col-md-9">
                          <h1 className="cells-head">
                            {abouts.nodes[0].about.cells[0].title}
                          </h1>
                          <div className="cells-team">
                            <div className="alumini-main1">
                              {cell &&
                                abouts.nodes[0].about.cells[0].data.map((i) => {
                                  return (
                                    <>
                                      <div className="alumini">
                                        <img src={i.image.sourceUrl} alt="" />
                                        <p className="alumini-name">{i.name}</p>
                                        <p className="alumini-position">
                                          {i.post}
                                        </p>
                                      </div>
                                    </>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="col-md-9">
                        <h1 className="cells-head">{title}</h1>
                        <div className="cells-team">
                          <div className="alumini-main1">
                            {cell &&
                              cell.map((i) => {
                                return (
                                  <>
                                    <div className="alumini">
                                      <img src={i.image.sourceUrl} alt="" />
                                      <p className="alumini-name">{i.name}</p>
                                      <p className="alumini-position">
                                        {i.post}
                                      </p>
                                    </div>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Cells;
