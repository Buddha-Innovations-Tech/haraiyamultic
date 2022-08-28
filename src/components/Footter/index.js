import React from "react";
import { Container } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Prospectus from "../../images/prospectus.pdf";

const Fotter = () => {
  return (
    <>
      <div className="fotter">
        <div className="main-fotter">
          <Container>
            <div className="fotter-list">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="link">UseFul Links</h3>
                  <div className="link-list">
                    <ul>
                      <li>
                        <a href="https://edusanjal.com/news/" target="_blank">
                          Educational News
                        </a>
                      </li>
                      <li>
                        <a href="https://tuexam.edu.np/" target="_blank">
                          TU,Office of Controller Examinations
                        </a>
                      </li>
                      <li>
                        <a href="https://tu.edusanjal.com/" target="_blank">
                          TU Results
                        </a>
                      </li>

                      <li>
                        <a href="http://www.ugcnepal.edu.np/" target="_blank">
                          University Grants Commission
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="quick-link">Quick Link</h3>
                  <div className="quick-link-list">
                    <p>
                      <Link to="/">Home</Link>
                    </p>
                    <p>
                      <Link to="/notice">Notice and Events</Link>
                    </p>
                    <p>
                      <Link to="/contact">Contact Us</Link>
                    </p>
                    <p>
                      <Link to="/admission_form">Admission</Link>
                    </p>
                    <p>
                      <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="link">Downloads</h3>
                  <div className="link-list">
                    <p>
                      <Link to="/admission_form">Admission Form</Link>
                    </p>
                    <p>
                      <a href={Prospectus} target="_blank">
                        Prospectus
                      </a>
                    </p>
                    <p>
                      <Link to="/report">Annual Report</Link>
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="contact-link">Contact</h3>
                  <div className="contact-link-list">
                    <p>
                      <BsTelephoneFill className="fa-solid fa-phone" />
                      071417022 | 9857058126 | 9857031167
                    </p>
                    <p>
                      <GrMail className="fa-solid fa-envelope" />
                      hmcharaiya@gmail.com
                    </p>
                    <p>
                      <MdLocationPin className="fa-solid fa-location-dot" />
                      Kanchan 3 Haraiya, Rupandehi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="mini-fotter">
          <Container>
            <p className="copyright">
              ©2020-2021 Haraiya Multiple Campous, All Rights Reserved. Designed
              and Developed By Tuna Technology
            </p>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Fotter;
