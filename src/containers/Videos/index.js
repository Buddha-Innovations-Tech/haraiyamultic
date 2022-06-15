import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Library from "../../images/library.jpg";
import Classroom from "../../images/classroom.png";
import Graduation from "../../images/graduation.png";
import Event from "../../images/events.png";
import Program from "../../images/program.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const Videos = () => {
  const GET_VIDEOS = gql`
    query NewQuery($id: ID!) {
      pageBy(id: $id) {
        title
        videos {
          videos {
            video {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_VIDEOS} id={"cG9zdDoxNDg="}>
        {({ data: { pageBy } }) => {
          return (
            <>
              <div className="banner-image">
                <img src={BannerImage} alt="" className="img-banner" />
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
                            Videos
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div class="notices">
                  <h1 class="notice-head">Video Gallery</h1>
                </div>

                <div class="gallery-images">
                  <div class="row gy-5">
                    {pageBy.videos.videos.map((a) => {
                      return (
                        <>
                          <div class="col-md-4">
                            <div class="video-list">
                              <iframe
                                width="350"
                                height="200"
                                src={a.video.mediaItemUrl}
                              ></iframe>
                              <div class="overlay"></div>
                            </div>
                          </div>
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

export default Videos;
