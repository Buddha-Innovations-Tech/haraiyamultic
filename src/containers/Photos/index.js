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

const Photos = () => {
  const GET_PHOTOS = gql`
    query NewQuery {
      photos {
        nodes {
          slug
          photos {
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
    }
  `;
  return (
    <>
      <Query query={GET_PHOTOS}>
        {({ data: { photos } }) => {
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
                            Photos
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div class="notices">
                  <h1 class="notice-head">Photo Gallery</h1>
                </div>
                <div class="gallery-images">
                  <div class="row gy-5">
                    {photos.nodes?.map((a) => {
                      return (
                        <>
                          <div class="col-md-4">
                            <div class="photo-list">
                              <img
                                src={a.photos?.featuredimage?.sourceUrl}
                                alt=""
                                class="img-fluid"
                              />
                              <div class="overlay">
                                <Link to={`/photosfull/${a.slug}`}>
                                  <p class="img-text">{a.photos?.title}</p>
                                </Link>
                              </div>
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

export default Photos;
