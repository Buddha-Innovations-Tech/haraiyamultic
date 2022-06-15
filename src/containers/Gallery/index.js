import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import Library from "../../images/library.jpg";
import Classroom from "../../images/classroom.png";
import Graduation from "../../images/graduation.png";
import Event from "../../images/events.png";
import Program from "../../images/program.png";
import gql from "graphql-tag";
import Query from "../../components/Query";
const Gallery = () => {
  const { id } = useParams();
  const GET_PHOTOS = gql`
    query NewQuery($id: ID!) {
      photo(idType: SLUG, id: $id) {
        photos {
          image {
            sourceUrl
          }
        }
      }
    }
  `;
  return (
    <>
      <Query query={GET_PHOTOS} id={id}>
        {({ data: { photo } }) => {
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
                    {photo.photos.image?.map((i) => {
                      return (
                        <div class="col-md-4">
                          <div class="photo-list">
                            <img src={i.sourceUrl} alt="" class="img-fluid" />
                            <div class="overlay"></div>
                          </div>
                        </div>
                      );
                    })}
                    {/* <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Library} alt="" class="img-fluid" />
                        <div class="overlay">
                          <Link to="/gallery">
                            <p class="img-text">Library</p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Classroom} alt="" class="img-fluid" />
                        <div class="overlay">
                          <a href="photo.html">
                            <p class="img-text">Classroom</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Graduation} alt="" class="img-fluid" />
                        <div class="overlay">
                          <a href="photo.html">
                            <p class="img-text">Graduation</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Event} alt="" class="img-fluid" />
                        <div class="overlay">
                          <a href="photo.html">
                            <p class="img-text">Events</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Program} alt="" class="img-fluid" />
                        <div class="overlay">
                          <a href="photo.html">
                            <p class="img-text">Program</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="photo-list">
                        <img src={Graduation} alt="" class="img-fluid" />
                        <div class="overlay">
                          <p class="img-text">Seminar</p>
                        </div>
                      </div>
                    </div> */}
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

export default Gallery;
