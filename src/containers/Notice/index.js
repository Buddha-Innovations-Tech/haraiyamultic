import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoticeBannerImage from "../../images/notice1.png";
import NoticeImage from "../../images/notice.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
import Moment from "react-moment";
import { useQuery } from "@apollo/react-hooks";
import ScrollToTop from "../../components/ScrollToTop";

const GET_NOTICE = gql`
  query NewQuery($first: Int, $last: Int, $after: String, $before: String) {
    notices(first: $first, last: $last, after: $after, before: $before) {
      edges {
        cursor
        node {
          date
          title
          link
          slug
          notice {
            noticeImage {
              mediaItemUrl
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.notices.edges.length
    ? fetchMoreResult
    : previousResult;
};
const ComponentPage = ({ error, loading, data, fetchMore }) => {
  const { notices } = data;

  return (
    <>
      <ScrollToTop />
      <div className="banner-image">
        <img src={NoticeBannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <div className="container">
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                We'd love to hear from <br />
                you
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
                    Notice
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="notices">
          <h1 className="notice-head">Notice</h1>
        </div>
        <div className="notice-list">
          <div className="row gx-3 gy-5">
            {notices.edges.map((curElm, index) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top notice-img"
                      src={curElm.node.notice.noticeImage.mediaItemUrl}
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
                              {curElm.node.date}
                            </Moment>
                          </p>
                        </div>
                      </div>
                      <h5 className="notice-title">{curElm.node.title}</h5>
                      {/* <p className="notice-text">
                            Examination form fil up Notice for management
                            student of BBS Third Year 2078 .
                          </p> */}
                      <div className="btn-notices">
                        <Link
                          to={`/singlenotice/${curElm.node.slug}`}
                          className="btn btn-primary btn-notice"
                          role="button"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="notice-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {notices.pageInfo.hasPreviousPage ? (
                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Previous"
                    onClick={() => {
                      fetchMore({
                        variables: {
                          first: null,
                          after: null,
                          last: 1,
                          before: notices.pageInfo.startCursor || null,
                        },
                        updateQuery,
                      });
                    }}
                  >
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              ) : null}
              {/* <li className="page-item">
                    <Link to="#" className="page-link notice-current_page">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li> */}
              {notices.pageInfo.hasNextPage ? (
                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={() => {
                      fetchMore({
                        variables: {
                          first: 1,
                          after: notices.pageInfo.endCursor || null,
                          last: null,
                          before: null,
                        },
                        updateQuery,
                      });
                    }}
                  >
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};
const Notice = () => {
  const variables = {
    first: 10,
    last: null,
    after: null,
    before: null,
  };
  const { data, error, loading, fetchMore } = useQuery(GET_NOTICE, {
    variables,
  });

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (loading) {
    return null;
  }

  return (
    <ComponentPage
      error={error}
      loading={loading}
      data={data}
      fetchMore={fetchMore}
    />
  );
};

export default Notice;
