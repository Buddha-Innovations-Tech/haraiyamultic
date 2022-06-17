import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerImage from '../../images/banner-image.png';
import { BsFillFilePdfFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import Moment from 'react-moment';
import { useQuery } from '@apollo/react-hooks';
const REPORT_DOWNLOAD = gql`
  query NewQuery($first: Int, $last: Int, $after: String, $before: String) {
    downloads(first: $first, last: $last, after: $after, before: $before) {
      edges {
        cursor
        node {
          date
          download {
            report {
              category
              title
              year
              action {
                mediaItemUrl
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
const updateQuery = (previousResult, { fetchMoreResult }) => {
  return fetchMoreResult.events.edges.length ? fetchMoreResult : previousResult;
};
const ComponentPage = ({ error, loading, data, fetchMore }) => {
  console.log(data);
  const { downloads } = data;
  return (
    <>
      <div className='banner-image'>
        <img src={BannerImage} alt='' className='img-banner' />
        <div className='overlay'>
          <div className='container'>
            <div className='alumini-banner-content'>
              <h1 className='alumini-heading'>
                BBS (Bachelor of Business <br /> Studies)
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
                    Report
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className='report-table mt-5 mb-3'>
          <table className='table'>
            <thead>
              <tr className='table-heading'>
                <th scope='col'>S.N</th>
                <th scope='col'>Title</th>
                <th scope='col'>Category</th>
                <th scope='col'>Year</th>
                <th scope='col'>Created at</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {downloads.edges.map((a) => {
                return (
                  <>
                    {a.node.download.report.map((b, index) => {
                      return (
                        <>
                          <tr className='table-body'>
                            <td>{index + 1}</td>
                            <td>{b.title}</td>
                            <td>{b.category}</td>
                            <td>{b.year}</td>
                            <td>
                              <Moment format='YYYY-MM-DD'>{a.date}</Moment>
                            </td>

                            <td>
                              <a href={b.action.mediaItemUrl} target='_blank'>
                                <BsFillFilePdfFill className='fa-file-pdf' />
                              </a>
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
        </div>
        {/* <div className="fotter-table">
          <div className="event-pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {downloads.pageInfo.hasPreviousPage ? (
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Previous"
                      onClick={() => {
                        fetchMore({
                          variables: {
                            first: null,
                            after: null,
                            last: 1,
                            before: downloads.pageInfo.startCursor || null,
                          },
                          updateQuery,
                        });
                      }}
                    >
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                ) : null}

                {downloads.pageInfo.hasNextPage ? (
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Next"
                      onClick={() => {
                        fetchMore({
                          variables: {
                            first: 1,
                            after: downloads.pageInfo.endCursor || null,
                            last: null,
                            before: null,
                          },
                          updateQuery,
                        });
                      }}
                    >
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
        </div> */}
      </Container>
    </>
  );
};
const Report = () => {
  const variables = {
    first: 10,
    last: null,
    after: null,
    before: null,
  };
  const { data, error, loading, fetchMore } = useQuery(REPORT_DOWNLOAD, {
    variables,
  });

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (loading) {
    return null;
  }

  return (
    <ComponentPage
      error={error}
      loading={loading}
      data={data}
      fetchMore={fetchMore}
    />
  );
};

export default Report;
