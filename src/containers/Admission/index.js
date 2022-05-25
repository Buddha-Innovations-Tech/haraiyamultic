import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/banner-image.png";
const Admission_Form = () => {
  return (
    <>
      <div class="admission-banner-image">
        <img src={BannerImage} alt="" class="admission-img-banner" />
        <div class="overlay">
          <div class="container">
            <div class="alumini-banner-content">
              <h1 class="alumini-heading">Admission Form </h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb contact-breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/" class="breadcrumb-item1">
                      Home
                    </Link>
                  </li>
                  <li
                    class="breadcrumb-item active breadcrumb-item2"
                    aria-current="page"
                  >
                    Admission
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="admission-form">
        <Container>
          <div className="fill-up-form">
            <p className="admission-head">Please completed the form</p>
            <div className="first-div-form">
              <div className="first-div-form-content">
                <p className="form-field">
                  Mandatory field <span className="form-symbol">*</span>
                </p>
                <div className="program">
                  <p className="form-field">
                    Program Applied For<span className="form-symbol">*</span>
                  </p>
                  <div className="dropdown choose-program">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      BBS
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          BBS
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          BE.d
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="area">
                  <p className="form-field">
                    Area of Specification<span className="form-symbol">*</span>
                  </p>
                  <div className="dropdown choose-specification">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Nepali
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          Nepali
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          English
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="second-div-form-content">
                <img
                  src="./assets/images/bimali.jpg"
                  alt=""
                  className="form-image"
                />
                <button type="button" className="btn btn-primary choose-image">
                  Choose Image
                </button>
              </div>
            </div>

            <div className="second-div-form">
              <p className="admission-head">Personal Information</p>
              <div className="seconclassName-div-form-content">
                <form>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label>
                          First Name<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>Middle Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Last Name<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label>
                          Gender<span className="form-symbol">*</span>
                        </label>
                        <div className="gender-checkbox">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              Female
                            </label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label class="form-check-label" for="inlineRadio2">
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Nationality<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Date of Birth<span className="form-symbol">*</span>
                        </label>
                        <input type="date" className="form-control date" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label>Mobile Number</label>
                        <input type="number" className="form-control" />
                      </div>

                      <div className="form-group col-md-4 middle-name">
                        <label>email</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="second-div-form">
              <p className="admission-head">Parent's Information</p>
              <div className="second-div-form-content">
                <form>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label>
                          Father Name<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>Father Occupation</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Mobile Number<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Mother's Name<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Mother Occupation
                          <span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Mobile Number<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control date" />
                      </div>
                    </div>
                  </div>

                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label>Guardian's Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>Relation</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="second-div-form">
              <p className="admission-head">Current Address</p>
              <div className="second-div-form-content">
                <form>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label for="exampleFormControlSelect1">
                          Provision<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>Provision5</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision1</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label for="exampleFormControlSelect1">
                          District<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>Rupandehi</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision5</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label for="exampleFormControlSelect1">
                          Municipality<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>kanchan</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          ward no<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Tole<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="second-div-form">
              <p className="admission-head">Permanet Address</p>
              <div className="form-check check-address">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Same as Current Address
                </label>
              </div>
              <div className="second-div-form-content">
                <form>
                  <div className="form-row permanet-address-row">
                    <div className="row">
                      <div className="form-group col-md-4 first-name">
                        <label for="exampleFormControlSelect1">
                          Provision<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>Provision5</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision1</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label for="exampleFormControlSelect1">
                          District<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>Rupandehi</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision5</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label for="exampleFormControlSelect1">
                          Municipality<span className="form-symbol">*</span>
                        </label>
                        <select
                          className="form-control address-name"
                          id="exampleFormControlSelect1"
                        >
                          <option>kanchan</option>
                          <option>Provision2</option>
                          <option>Provision3</option>
                          <option>Provision4</option>
                          <option>Provision5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row personal-row">
                    <div className="row">
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          ward no<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Tole<span className="form-symbol">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="second-div-form">
              <p className="admission-head">
                Education Qualification<span className="form-symbol">*</span>
              </p>
              <div className="education-form-content">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="education-head-list">Level</th>
                      <th className="education-head-list">Board</th>
                      <th className="education-head-list">
                        Full Marks/
                        <br />
                        Credit
                      </th>
                      <th className="education-head-list">
                        Marks Obtained/
                        <br />
                        Credit
                      </th>
                      <th className="education-head-list">
                        Percent/
                        <br />
                        GPA
                      </th>
                      <th className="education-head-list">
                        Division/
                        <br />
                        GPA
                      </th>
                      <th className="education-head-list">Passed Year</th>
                      <th className="education-head-list">Major Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="education-list">SLC/SEE</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th className="education-list">+2</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="second-div-form">
              <p className="admission-head">Required Document</p>
              <div className="education-form-content">
                <ul className="education-document">
                  <li>
                    Upload marksheet, transfer certificate and character
                    certificate of SLC.
                  </li>
                  <li>
                    Upload transcript, provisional certificate, character
                    certificate and migration certificate of 10+2 Level and
                    SLC/SEE.
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="doucment-head">SLC/SEE Document</h1>
                    <div className="custom-file document-file">
                      <p className="document-list">SLC Marksheet</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                      {/* <label className="custom-file-label" for="customFile">
                        Choose file
                      </label> */}
                    </div>

                    <div className="custom-file document-file">
                      <p className="document-list">Character Certificate</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                    </div>

                    <div className="custom-file document-file">
                      <p className="document-list">Transfer Certificate</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h1 className="doucment-head">+2 Marksheet</h1>
                    <div className="custom-file document-file">
                      <p className="document-list">+2 Marksheet</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                    </div>
                    <div className="custom-file document-file">
                      <p className="document-list">Character Certificate</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                      {/* <label className="custom-file-label" for="customFile">
                          Choose file
                        </label> */}
                    </div>
                    <div className="custom-file document-file">
                      <p className="document-list">Transfer Certificate</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                      {/* <label className="custom-file-label" for="customFile">
                        Choose file
                      </label> */}
                    </div>
                    <div className="custom-file document-file">
                      <p className="document-list">Provision Certificate</p>
                      <input
                        type="file"
                        className="custom-file-input document-store"
                        id="customFile"
                      />
                    </div>
                  </div>

                  <div className="application-button">
                    <button
                      type="button"
                      className="btn btn-secondary btn-discard"
                    >
                      Discard
                    </button>
                    <button type="button" className="btn btn-primary btn-save">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Admission_Form;
