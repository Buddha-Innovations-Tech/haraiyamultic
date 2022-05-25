import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoticeBannerImage from "../../images/notice1.png";
import EventImage from "../../images/event-image.png";

const StudentZone = () => {
  return (
    <>
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
                    Event
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="notices">
          <div className="event">
            <h1 className="notice-head">Student zone</h1>
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
                Student Zone
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
        <div className="events-list">
          <div className="row gx-3 gy-5">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top event-img"
                  src={EventImage}
                  alt="Card image cap"
                />
                <div className="event-body">
                  <p className="notice-title">
                    Entrance exam for Fresher Students 2077 (BBS)
                  </p>
                  <p className="notice-text">
                    लुम्बिनी प्रदेश स्थापना दिवसको अवसरमा सामाजिक विकास डिभिजन
                    कार्यालय रुपन्देहीले यहि फाल्गुन १ गते .......
                  </p>
                  <div className="btn-event">
                    <div className="date">
                      <p>
                        <i className="fa-solid fa-calendar"></i>29 sep 2020
                      </p>
                    </div>
                    <div>
                      <Link to="#" className="event-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="event-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link to="#" className="page-link" aria-label="Previous">
                  <span className="sr-only">Previous</span>
                </Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link notice-current_page">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link notice-current_page">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link notice-current_page">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to="#" className="page-link" aria-label="Next">
                  <span className="sr-only">Next</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};

export default StudentZone;
