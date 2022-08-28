import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoticeBannerImage from "../../images/notice1.png";
import EventImage from "../../images/event-image.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
import Moment from "react-moment";
import { useQuery } from "@apollo/react-hooks";
import ScrollToTop from "../../components/ScrollToTop";

const GET_EVENTS = gql`
  query NewQuery($first: Int, $last: Int, $after: String, $before: String) {
    events(first: $first, last: $last, after: $after, before: $before) {
      edges {
        cursor
        node {
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
  return fetchMoreResult.events.edges.length ? fetchMoreResult : previousResult;
};

const ComponentPage = ({ error, loading, data, fetchMore }) => {
  // console.log(data);
  const [filterTerm, setFilterTerm] = useState("All Events");
  const { events } = data;
  return (
    <>
      <ScrollToTop />
      <div className="banner-image">
        <img src={NoticeBannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <Container>
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
                    Event
                  </li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="notices">
          <div className="event">
            <h1 className="notice-head">Events</h1>
          </div>
          <div className="event-cat">
            <div className="dropdown">
              <select
                className="notice-select"
                onChange={(e) => setFilterTerm(e.target.value)}
              >
                <option value="All Events"> All Events</option>
                <option value="Student Zone">Student Zone</option>
              </select>
            </div>
          </div>
        </div>
        <div className="events-list">
          <div className="row gx-3 gy-5">
            {filterTerm === "All Events"
              ? events.edges?.map((a) => {
                  return (
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="card-img-top event-img"
                          src={a.node.events.featuredimage.sourceUrl}
                          alt="Card image cap"
                        />
                        <div className="event-body">
                          <p className="notice-title">{a.node.events.title}</p>
                          <p
                            className="notice-text"
                            dangerouslySetInnerHTML={{
                              __html: a.node.events.description,
                            }}
                          />

                          <div className="btn-event">
                            <div className="date">
                              <p>
                                <Moment format="YYYY-MM-DD">
                                  {a.node.date}
                                </Moment>
                              </p>
                            </div>
                            <div>
                              <Link
                                to={`/event_description/${a.node.slug}`}
                                className="event-link"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : events.edges
                  ?.filter((i) => i.node.events.eventtype === filterTerm)
                  .map((a) => {
                    return (
                      <>
                        <div className="col-md-4">
                          <div className="card">
                            <img
                              className="card-img-top event-img"
                              src={a.node.events.featuredimage.sourceUrl}
                              alt="Card image cap"
                            />
                            <div className="event-body">
                              <p className="notice-title">
                                {a.node.events.title}
                              </p>
                              <p
                                className="notice-text"
                                dangerouslySetInnerHTML={{
                                  __html: a.node.events.description,
                                }}
                              />

                              <div className="btn-event">
                                <div className="date">
                                  <p>
                                    <Moment format="YYYY-MM-DD">
                                      {a.node.date}
                                    </Moment>
                                  </p>
                                </div>
                                <div>
                                  <Link
                                    to={`/event_description/${a.node.slug}`}
                                    className="event-link"
                                  >
                                    Read More
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
          </div>
        </div>

        <div className="event-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {events.pageInfo.hasPreviousPage ? (
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
                          before: events.pageInfo.startCursor || null,
                        },
                        updateQuery,
                      });
                    }}
                  >
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              ) : null}

              {events.pageInfo.hasNextPage ? (
                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={() => {
                      fetchMore({
                        variables: {
                          first: 1,
                          after: events.pageInfo.endCursor || null,
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
const Event = () => {
  const variables = {
    first: 10,
    last: null,
    after: null,
    before: null,
  };
  const { data, error, loading, fetchMore } = useQuery(GET_EVENTS, {
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

export default Event;
