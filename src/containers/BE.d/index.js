import React, { useState } from "react";
import BannerImage from "../../images/banner-image.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import Query from "../../components/Query";
const BED = () => {
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(true);
  const descHandle = (descriptions) => {
    setDesc(descriptions);
  };
  const GET_BED = gql`
    query NewQuery {
      academics {
        nodes {
          academic {
            bed {
              title
              description
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_BED} id={null}>
        {({ data: { academics } }) => {
          return (
            <>
              <div className="banner-image">
                <img src={BannerImage} alt="" className="img-banner" />
                <div className="overlay">
                  <Container>
                    <div className="alumini-banner-content">
                      <h1 className="alumini-heading">
                        BE.D (Bachelor in <br /> Education)
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
                            BE.d
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </Container>
                </div>
              </div>

              <div className="main-content">
                <Container>
                  <div className="content-list">
                    <div className="bbs-list">
                      <ul className="nav nav-tabs">
                        {academics.nodes.map((a) => {
                          return (
                            <>
                              {a.academic.bed.map((b) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                      onClick={() => {
                                        setLoading(false);
                                        descHandle(b.description);
                                      }}
                                    >
                                      <Link
                                        to=""
                                        className="nav-link bbs-navlist"
                                        aria-current="page"
                                      >
                                        {b.title}
                                      </Link>
                                    </li>
                                  </>
                                );
                              })}
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  {loading && (
                    <div className="BBS-content">
                      {/* <div className="BBS-heading">
                      <h1 className="BBS-intro">Introduction</h1>
                    </div> */}
                      <div className="BBS-content">
                        {
                          <p
                            className="bbs-content"
                            dangerouslySetInnerHTML={{
                              __html:
                                academics.nodes[0].academic.bed[0].description,
                            }}
                          />
                        }
                      </div>
                    </div>
                  )}

                  <div className="BBS-content">
                    {/* <div className="BBS-heading">
                      <h1 className="BBS-intro">Introduction</h1>
                    </div> */}
                    <div className="BBS-content">
                      {
                        <p
                          className="bbs-content"
                          dangerouslySetInnerHTML={{
                            __html: desc,
                          }}
                        />
                      }
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
export default BED;
