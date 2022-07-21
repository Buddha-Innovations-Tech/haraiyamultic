import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HaraiyaLogo from '../../images/haraiyaLogo';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { RiLoginBoxFill } from 'react-icons/ri';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import { useState } from 'react';
import { useEffect } from 'react';
const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [AuthToken, setAuthToken] = useState(null);

  const [local, setLocal] = useState(null);

  const GET_ACADEMIC = gql`
    query NewQuery {
      academics {
        nodes {
          title
          slug
        }
      }
    }
  `;

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logOutUser = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const items = localStorage.getItem('user');
    if (items) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, []);
  useEffect(() => {
    const items = localStorage.getItem('user');
    if (items) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [isLoggedIn]);
  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log('storage changed');
    });
  }, []);

  return (
    <>
      <div className='fixedtopnavbar'>
        <div className='top-navbar'>
          <Container>
            <div className='navFullWrappper'>
              <div className='navWrapper-address'>
                <div className='phone-no'>
                  <BsTelephoneFill className='fa-solid fa-phone' />
                  <span className='top-phone'>9857058126 | 9857031167</span>
                </div>
                <div className='email'>
                  <GrMail className='fa-solid fa-envelope' />
                  <span className='top-email'>hmcharaiya@gmail.com</span>
                </div>
              </div>

              <div className='navWrapper-zone'>
                <div className='student'>
                  <Link to='/student_zone'>
                    <span className='student-zone'>Student Zone</span>
                  </Link>
                </div>
                {!isLoggedIn ? (
                  <div className='login'>
                    <Link
                      to='/login'
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      <RiLoginBoxFill className='fa-solid fa-lock' />
                      <span className='top-login'>Log in</span>
                    </Link>
                  </div>
                ) : (
                  <div className='login'>
                    <Link
                      to=''
                      style={{ color: '#fff', textDecoration: 'none' }}
                      onClick={logOutUser}
                    >
                      <span className='top-login'>LogOut</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>

        <nav className='navbar navbar-expand-lg navbar-light bg-white pt-1 pb-1s navbar-large'>
          <Container>
            <Link to='/' className='navbar-brand'>
              <img src={HaraiyaLogo} alt='logo' class='logo-image' />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item active'>
                  <Link to='/' className='nav-link navbar-list'>
                    Home
                  </Link>
                  {/* <Link to="/">Home</Link> */}
                </li>

                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle navbar-list'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    About
                  </Link>
                  <ul
                    className='dropdown-menu dropdown-intro'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <Link to='/about' className='dropdown-item intro'>
                        Introduction
                      </Link>
                    </li>
                    <li>
                      <Link to='/message' className='dropdown-item intro'>
                        Message
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/managment_commitee'
                        className='dropdown-item intro'
                      >
                        Managment Commitee
                      </Link>
                    </li>
                    <li>
                      <Link to='/team' className='dropdown-item intro'>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to='/cells' className='dropdown-item intro'>
                        Cells
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle navbar-list'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Academic
                  </Link>
                  <div
                    className='dropdown-menu dropdown-list'
                    aria-labelledby='navbarDropdown'
                  >
                    <Query query={GET_ACADEMIC}>
                      {({ data: { academics } }) => {
                        return (
                          <>
                            {academics.nodes?.map((a) => {
                              return (
                                <>
                                  <Link
                                    to={`academics/${a.slug}`}
                                    className='dropdown-item intro'
                                  >
                                    {a.title}
                                  </Link>
                                </>
                              );
                            })}
                          </>
                        );
                      }}
                    </Query>
                  </div>
                </li>

                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle navbar-list'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Download
                  </Link>
                  <div
                    className='dropdown-menu dropdown-list'
                    aria-labelledby='navbarDropdown'
                  >
                    <Link to='/report' className='dropdown-item intro'>
                      Report
                    </Link>
                    <Link to='/syllabus' className='dropdown-item intro'>
                      Syllabus
                    </Link>
                  </div>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle navbar-list'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Gallery
                  </Link>
                  <div
                    className='dropdown-menu dropdown-list'
                    aria-labelledby='navbarDropdown'
                  >
                    <Link to='/photos' className='dropdown-item intro'>
                      Photos
                    </Link>
                    <Link to='/videos' className='dropdown-item intro'>
                      Videos
                    </Link>
                  </div>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    to='#'
                    className='nav-link dropdown-toggle navbar-list'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Notice
                  </Link>
                  <div
                    className='dropdown-menu dropdown-list'
                    aria-labelledby='navbarDropdown'
                  >
                    <Link to='/notice' className='dropdown-item intro'>
                      Notice
                    </Link>
                    <Link to='/event' className='dropdown-item intro'>
                      Event
                    </Link>
                  </div>
                </li>
                <li className='nav-item'>
                  <Link to='/alumini' className='nav-link nav-list2'>
                    Alumini
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/contact'
                    className='nav-link nav-contact nav-list2'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
        <>
          {[false].map((expand) => (
            <Navbar
              key={expand}
              bg='light'
              expand={expand}
              className=' navbar-small '
            >
              <Container fluid>
                <Navbar.Brand href='/'>
                  <img src={HaraiyaLogo} alt='logo' class='logo-image' />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement='end'
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <Link to='/' className='navbar-brand'>
                        <img src={HaraiyaLogo} alt='logo' class='logo-image' />
                      </Link>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className='justify-content-end flex-grow-1 pe-3'>
                      <div>
                        <ul className='navbar-nav ms-auto navbar-small-css'>
                          <li className='nav-item active'>
                            <Link to='/' className='nav-link navbar-list'>
                              Home
                            </Link>
                            {/* <Link to="/">Home</Link> */}
                          </li>

                          <li className='nav-item dropdown'>
                            <Link
                              to='#'
                              className='nav-link dropdown-toggle navbar-list'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              About
                            </Link>
                            <div
                              className='dropdown-menu dropdown-intro'
                              aria-labelledby='navbarDropdown'
                            >
                              <Link to='/about' className='dropdown-item intro'>
                                Introduction
                              </Link>

                              <Link
                                to='/message'
                                className='dropdown-item intro'
                              >
                                Message
                              </Link>

                              <Link
                                to='/managment_commitee'
                                className='dropdown-item intro'
                              >
                                Managment Commitee
                              </Link>

                              <Link to='/team' className='dropdown-item intro'>
                                Team
                              </Link>

                              <Link to='/cells' className='dropdown-item intro'>
                                Cells
                              </Link>
                            </div>
                          </li>
                          <li className='nav-item dropdown'>
                            <Link
                              to='#'
                              className='nav-link dropdown-toggle navbar-list'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Academic
                            </Link>
                            <div
                              className='dropdown-menu dropdown-list'
                              aria-labelledby='navbarDropdown'
                            >
                              <Query query={GET_ACADEMIC}>
                                {({ data: { academics } }) => {
                                  return (
                                    <>
                                      {academics.nodes?.map((a) => {
                                        return (
                                          <>
                                            <Link
                                              to={`academics/${a.slug}`}
                                              className='dropdown-item intro'
                                            >
                                              {a.title}
                                            </Link>
                                          </>
                                        );
                                      })}
                                    </>
                                  );
                                }}
                              </Query>
                            </div>
                          </li>

                          <li className='nav-item dropdown'>
                            <Link
                              to='#'
                              className='nav-link dropdown-toggle navbar-list'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Download
                            </Link>
                            <div
                              className='dropdown-menu dropdown-list'
                              aria-labelledby='navbarDropdown'
                            >
                              <Link
                                to='/report'
                                className='dropdown-item intro'
                              >
                                Report
                              </Link>
                              <Link
                                to='/syllabus'
                                className='dropdown-item intro'
                              >
                                Syllabus
                              </Link>
                            </div>
                          </li>
                          <li className='nav-item dropdown'>
                            <Link
                              to='#'
                              className='nav-link dropdown-toggle navbar-list'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Gallery
                            </Link>
                            <div
                              className='dropdown-menu dropdown-list'
                              aria-labelledby='navbarDropdown'
                            >
                              <Link
                                to='/photos'
                                className='dropdown-item intro'
                              >
                                Photos
                              </Link>
                              <Link
                                to='/videos'
                                className='dropdown-item intro'
                              >
                                Videos
                              </Link>
                            </div>
                          </li>
                          <li className='nav-item dropdown'>
                            <Link
                              to='#'
                              className='nav-link dropdown-toggle navbar-list'
                              id='navbarDropdown'
                              role='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Notice
                            </Link>
                            <div
                              className='dropdown-menu dropdown-list'
                              aria-labelledby='navbarDropdown'
                            >
                              <Link
                                to='/notice'
                                className='dropdown-item intro'
                              >
                                Notice
                              </Link>
                              <Link to='/event' className='dropdown-item intro'>
                                Event
                              </Link>
                            </div>
                          </li>
                          <li className='nav-item'>
                            <Link to='/alumini' className='nav-link nav-list2'>
                              Alumini
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link
                              to='/contact'
                              className='nav-link nav-contact nav-list2'
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      </div>
    </>
  );
};
export default NavBar;
