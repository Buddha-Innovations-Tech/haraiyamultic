import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
import { BsFillFilePdfFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const Report = () => {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="" className="img-banner" />
        <div className="overlay">
          <div className="container">
            <div className="alumini-banner-content">
              <h1 className="alumini-heading">
                BBS (Bachelor of Business <br /> Studies)
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
                    Report
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="notices">
          <h1 className="notice-head">Report</h1>
        </div>

        <div className="report-search">
          <div className="show-entries">
            <p className="show">Show</p>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle show-button"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                5
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link to="#" className="dropdown-item">
                  10
                </Link>
                <Link to="#" className="dropdown-item">
                  15
                </Link>
                <Link to="#" className="dropdown-item">
                  20
                </Link>
              </div>
            </div>
            <p className="entries">entries</p>
          </div>
          <div className="search-report">
            <BiSearch className="fa-file-search" />
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="search-placeholder"
            />
          </div>
        </div>

        <div className="report-table">
          <table className="table">
            <thead>
              <tr className="table-heading">
                <th scope="col">S.N</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Year</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-body">
                <td>1</td>
                <td>Strategic Plan for 2020-2025</td>
                <td>Strategy</td>
                <td>2020-2025</td>
                <td>2022-03-15</td>
                <td>
                  <BsFillFilePdfFill className="fa-file-pdf" />
                </td>
              </tr>
              <tr className="table-body">
                <td>2</td>
                <td>Strategic Plan for 2020-2025</td>
                <td>Strategy</td>
                <td>2020-2025</td>
                <td>2022-03-15</td>
                <td>
                  <BsFillFilePdfFill className="fa-file-pdf" />
                </td>
              </tr>
              <tr className="table-body">
                <td>3</td>
                <td>Strategic Plan for 2020-2025</td>
                <td>Strategy</td>
                <td>2020-2025</td>
                <td>2022-03-15</td>
                <td>
                  <BsFillFilePdfFill className="fa-file-pdf" />
                </td>
              </tr>
              <tr className="table-body">
                <td>4</td>
                <td>Strategic Plan for 2020-2025</td>
                <td>Strategy</td>
                <td>2020-2025</td>
                <td>2022-03-15</td>
                <td>
                  <BsFillFilePdfFill className="fa-file-pdf" />
                </td>
              </tr>
              <tr className="table-body">
                <td>5</td>
                <td>Strategic Plan for 2020-2025</td>
                <td>Strategy</td>
                <td>2020-2025</td>
                <td>2022-03-15</td>
                <td>
                  <BsFillFilePdfFill className="fa-file-pdf" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="fotter-table">
          <p className="report">Show 1 to 5 entries</p>

          <div className="notice-pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link to="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true" className="page-previous">
                      Previous
                    </span>
                    {/* <span className="sr-only">Previous</span> */}
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="#" className="page-link report-current_page">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link to="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true" className="page-next">
                      Next
                    </span>
                    {/* <span className="sr-only">Next</span> */}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Report;
