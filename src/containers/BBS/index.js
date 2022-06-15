import React, { useState } from "react";
import BannerImage from "../../images/banner-image.png";
import { Link, useParams } from "react-router-dom";
import gql from "graphql-tag";
import Query from "../../components/Query";
const BBS = () => {
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(true);

  const descHandle = (descriptions) => {
    setDesc(descriptions);
  };
  const { id } = useParams();

  const GET_BBS = gql`
    query NewQuery($id: ID!) {
      academic(id: $id, idType: SLUG) {
        academic {
          academic {
            title
            description
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_BBS} id={id}>
        {({ data: { academic } }) => {
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
                <div className="container">
                  <div className="content-list">
                    <div className="bbs-list">
                      <ul className="nav nav-tabs">
                        {academic.academic.academic.map((b) => {
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
                      </ul>
                    </div>
                  </div>
                  {loading && (
                    <div className="BBS-content">
                      {/* <div className="BBS-heading">
                      <h1 className="BBS-intro">Introduction</h1>
                    </div> */}
                      <div className="BBS-content">
                        <p
                          className="bbs-content"
                          dangerouslySetInnerHTML={{
                            __html: academic.academic.academic[0].description,
                          }}
                        />
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
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};
export default BBS;
