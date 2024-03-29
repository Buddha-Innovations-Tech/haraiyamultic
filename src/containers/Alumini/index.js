import React from 'react';
import BannerImage from '../../images/banner-image.png';
import { Link } from 'react-router-dom';
import AluminiImage from '../../images/bimali.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import ScrollToTop from '../../components/ScrollToTop';

const Alumini = () => {
  const GET_ALUMINI = gql`
    query NewQuery {
      page(id: "cG9zdDo2MjE=") {
        alumini {
          alumnis {
            name
            post
            image {
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <ScrollToTop />
      <Query query={GET_ALUMINI}>
        {({ data: { page } }) => {
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
                            Alumini
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div className='contact'>
                  <h1 className='contact-head'>Alumini</h1>
                </div>
                <div className='alumini-main1'>
                  {page.alumini.alumnis.map((a) => {
                    return (
                      <>
                        <div className='alumini'>
                          <img src={a.image?.sourceUrl} alt='' />
                          <p className='alumini-name'>{a.name}</p>
                          <p className='alumini-position'>{a.post}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Container>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Alumini;
