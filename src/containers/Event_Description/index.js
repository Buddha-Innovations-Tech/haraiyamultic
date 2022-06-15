import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NoticeBannerImage from "../../images/notice1.png";
import EventDescriptionImage from "../../images/event-description-image.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const EventDescription = () => {
  const { id } = useParams();

  const GET_SINGLEEVENTS = gql`
    query NewQuery($id: ID!) {
      event(idType: SLUG, id: $id) {
        events {
          description
          featuredimage {
            sourceUrl
          }
          title
          image {
            sourceUrl
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_SINGLEEVENTS} id={id}>
        {({ data: { event } }) => {
          return (
            <>
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
                          <li className="breadcrumb-item">
                            <Link to="/Home" className="breadcrumb-item1">
                              Event
                            </Link>
                          </li>
                          <li
                            className="breadcrumb-item active breadcrumb-item2"
                            aria-current="page"
                          >
                            Event_description
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
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All event
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link to="/student_zone" className="dropdown-item">
                          Student Zone
                        </Link>
                        <Link to="/event" className="dropdown-item">
                          All event
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="description">
                  <Container>
                    <div className="event-description-heading">
                      <p className="event-descriptions-head">
                        {event.events.title}
                      </p>
                    </div>
                    <div className="event-description">
                      <img
                        className="card-img-top img-event-description"
                        src={event.events.featuredimage.sourceUrl}
                        alt="Card image cap"
                      />
                      <div className="event-body-description">
                        <p
                          className="event-text"
                          dangerouslySetInnerHTML={{
                            __html: event.events.description,
                          }}
                        />
                      </div>
                    </div>
                  </Container>
                </div>

                <div className="event-related-image">
                  <p className="event-related-head">Related Images</p>
                  <div className="owl-carousel event-image mb-5">
                    {event?.events?.image?.map((a) => {
                      return (
                        <>
                          <img
                            src={a.sourceUrl}
                            alt=""
                            className="img-description"
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </Container>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default EventDescription;
