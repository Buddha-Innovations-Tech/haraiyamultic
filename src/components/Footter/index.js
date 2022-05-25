import React from "react";
import { Container } from "react-bootstrap";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <>
      <div className="fotter">
        <div className="main-fotter">
          <Container>
            <div className="fotter-list">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="link">Useful Link</h3>
                  <div className="link-list">
                    <p>Educational News </p>
                    <p>TU, Office of the Controller of Examination</p>
                    <p>Tribhuvan University Results</p>
                    <p>University Grants Commission</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="quick-link">Quick Link</h3>
                  <div className="quick-link-list">
                    <p>Home</p>
                    <p>Notice and Events</p>
                    <p> Contact us</p>
                    <p>Admission</p>
                    <p>Login</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="link">Downloads</h3>
                  <div className="link-list">
                    <p>Admission Form</p>
                    <p>Prospectus</p>
                    <p>Annual Report</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <h3 className="contact-link">Contact</h3>
                  <div className="contact-link-list">
                    <p>
                      <BsTelephoneFill className="fa-solid fa-phone" />
                      071-417022, , 986745345
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
