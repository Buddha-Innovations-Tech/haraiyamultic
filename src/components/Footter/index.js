import React from 'react';
import { Container } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Fotter = () => {
  return (
    <>
      <div className='fotter'>
        <div className='main-fotter'>
          <Container>
            <div className='fotter-list'>
              <div className='row'>
                <div className='col-md-3'>
                  <h3 className='link'>About HMC</h3>
                  <div className='link-list'>
                    <p>
                      Haraiya Multiple campus is a non-profit making educational
                      institution affiliated to Tribhuvan University,
                      established in 2064 B.S. (2008) with the motto of
                      disseminating quality education basically to the students
                      coming from underprivileged and marginalized groups as
                      well as middle-class backgrounds at affordable cost. The
                      campus offers two programs: education and management
                      streams.
                    </p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <h3 className='quick-link'>Quick Link</h3>
                  <div className='quick-link-list'>
                    <p>
                      <Link to='/'>Home</Link>
                    </p>
                    <p>
                      <Link to='/notice'>Notice and Events</Link>
                    </p>
                    <p>
                      <Link to='/contact'>Contact Us</Link>
                    </p>
                    <p>
                      <Link to='/admission_form'>Admission</Link>
                    </p>
                    <p>
                      <Link to='/login'>Login</Link>
                    </p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <h3 className='link'>Downloads</h3>
                  <div className='link-list'>
                    <p>
                      <Link to='/admission_form'>Admission Form</Link>
                    </p>
                    <p>Prospectus</p>
                    <p>
                      <Link to='/report'>Annual Report</Link>
                    </p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <h3 className='contact-link'>Contact</h3>
                  <div className='contact-link-list'>
                    <p>
                      <BsTelephoneFill className='fa-solid fa-phone' />
                      9857058126 | 9857031167
                    </p>
                    <p>
                      <GrMail className='fa-solid fa-envelope' />
                      hmcharaiya@gmail.com
                    </p>
                    <p>
                      <MdLocationPin className='fa-solid fa-location-dot' />
                      Kanchan 3 Haraiya, Rupandehi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className='mini-fotter'>
          <Container>
            <p className='copyright'>
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
