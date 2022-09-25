import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Modal, Button } from 'react-bootstrap';
import BannerImage from '../../images/banner-image.png';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import { BsFillFilePdfFill } from 'react-icons/bs';
import ScrollToTop from '../../components/ScrollToTop';

const QAA = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [downloadLink, setDownloadlink] = useState('');
  const [linkPassword, setLinkPassword] = useState('');
  const GET_QAA = gql`
    query NewQuery {
      qaas {
        nodes {
          qaa {
            qaaname {
              name
              password
              downloadlink {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <ScrollToTop />
      <Query query={GET_QAA}>
        {({ data: { qaas } }) => {
          return (
            <>
              <div className='banner-image'>
                <img src={BannerImage} alt='' className='img-banner' />
                <div className='overlay'>
                  <div className='container'>
                    <div className='alumini-banner-content'>
                      <h1 className='alumini-heading'>
                        We'd love to hear from <br />
                        you
                      </h1>
                      <nav aria-label='breadcrumb'>
                        <ol className='breadcrumb contact-breadcrumb'>
                          <li className='breadcrumb-item'>
                            <Link to='/Home' className='breadcrumb-item1'>
                              Home
                            </Link>
                          </li>
                          <li
                            className='breadcrumb-item active breadcrumb-item2'
                            aria-current='page'
                          >
                            QAA
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <Container className='mt-5'>
                <table className='table'>
                  <thead>
                    <tr className='table-heading'>
                      <th>S.N</th>
                      <th>QAA</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qaas?.nodes?.map((a) => {
                      return (
                        <>
                          {a?.qaa?.qaaname?.map((b, index) => {
                            return (
                              <>
                                <tr className='table-body'>
                                  <td>{index + 1}</td>
                                  <td>{b?.name}</td>

                                  <td>
                                    <BsFillFilePdfFill
                                      className='fa-file-pdf'
                                      onClick={(e) => {
                                        handleShow();
                                        setDownloadlink(
                                          b?.downloadlink?.mediaItemUrl
                                        );
                                        setLinkPassword(b?.password);
                                      }}
                                    />

                                    {/* <a
                                      href={b?.downloadlink?.mediaItemUrl}
                                      target="_blank"
                                    >
                                    </a> */}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input
                      type='password'
                      className='form-control contact-placeholder downloadfile-input'
                      placeholder='Enter Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    {linkPassword === password ? (
                      <a
                        href={downloadLink}
                        target='_blank'
                        onClick={handleClose}
                        className='downloadfile-btn'
                      >
                        Download
                      </a>
                    ) : (
                      ''
                    )}
                  </Modal.Footer>
                </Modal>
              </Container>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default QAA;
