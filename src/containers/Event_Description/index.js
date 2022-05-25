import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NoticeBannerImage from "../../images/notice1.png";
import EventDescriptionImage from "../../images/event-description-image.png";

const EventDescription = () => {
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
                Entrance exam for Fresher Students 2077 (BBS)
              </p>
            </div>
            <div className="event-description">
              <img
                className="card-img-top img-event-description"
                src={EventDescriptionImage}
                alt="Card image cap"
              />
              <div className="event-body-description">
                <p className="event-text">
                  घरेलु तथा साना उद्योग विकास समिति गुल्मीको आयोजनामा रेसुंगा
                  बहुमुखी क्याम्पस कक्षा ११ र १२ मा अध्ययनरत विद्यार्थीहरुलाइ
                  विश्व उपभोक्ता अधिकार दिवस (15 March) को सन्दर्भमा "उपभोक्ता
                  अधिकार" सम्बन्धि अन्तरकृया/छलफल आयोजना गरियो । सो कार्यक्रममा
                  घरेलु विकास समिती गुल्मीका कार्यालय प्रमुख श्री लक्ष्मण घिमिरे
                  र कार्यक्रम अधिकृत श्री सुवास घिमिरेले उपभोक्ता अधिकार र
                  हाम्रो दायित्व सम्बन्धमा ज्ञान तथा सीप दिनुभएको थियो । साथै
                  कार्यक्रममा उपप्राध्यापक पदम प्रसाद पाण्डेले उपभोक्ता अधिकार
                  उपभोगमा आम नागरिक नै सचेत हुनुपर्ने बताउनुभयो ।यसैगरी सा.
                  क्या. प्र. रामप्रसाद खनालले उपभोग्य वस्तु, बजार र मुल्यवारे
                  हरेक नागरिकले जानकारी राख्दै सचेत भएर वस्तु खरिद गर्नुपर्ने
                  बताउनु भयो । क्याम्पस प्रमुख हरिबहादुर खत्री प्रमुख अतिथि र
                  सा. क्या. प्रमुख रामप्रसाद खनाल अतिथि रहेको उक्त कार्यक्रममा
                  करिब ९० जना विद्यार्थी र केहि प्राध्यापकहरुको सहभागीता रहेको
                  थियो ।
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div className="event-related-image">
          <p className="event-related-head">Related Images</p>
          <div className="owl-carousel event-image">
            <img
              src={EventDescriptionImage}
              alt=""
              className="img-description"
            ></img>
            <img
              src={EventDescriptionImage}
              alt=""
              className="img-description"
            ></img>
            <img
              src={EventDescriptionImage}
              alt=""
              className="img-description"
            ></img>
            <img
              src={EventDescriptionImage}
              alt=""
              className="img-description"
            ></img>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EventDescription;
