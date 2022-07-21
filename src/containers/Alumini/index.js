import React from 'react';
import BannerImage from '../../images/banner-image.png';
import { Link } from 'react-router-dom';
import AluminiImage from '../../images/bimali.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import gql from 'graphql-tag';
import Query from '../../components/Query';

const Alumini = () => {
  const GET_ALUMINI = gql`
    query NewQuery {
      aluminis {
        nodes {
          alumini {
            name
            post
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
      <Query query={GET_ALUMINI}>
        {({ data: { aluminis } }) => {
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
                  {aluminis.nodes.map((a) => {
                    return (
                      <>
                        <div className='alumini'>
                          <img src={a.alumini?.image?.sourceUrl} alt='' />
                          <p className='alumini-name'>{a.alumini.name}</p>
                          <p className='alumini-position'>{a.alumini.post}</p>
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
