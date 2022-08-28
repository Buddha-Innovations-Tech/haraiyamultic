import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Photo from "../../images/bimali.jpg";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";
const StudentDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState();
  const getAllUsers = async () => {
    const tokenAuth = localStorage.getItem("user");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenAuth}`,
      },
    };
    await axios.get(`/api/forms/get/form/${id}`, config).then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  if (!users) return <p>loading...</p>;
  return (
    <>
      <ScrollToTop />
      <div>
        <Container>
          <div className="d-flex">
            <div className="studentprofile">
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.image}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div className="studentname">
              <h2>
                {users &&
                  users.personalInformation &&
                  `${users.personalInformation.firstname} ${users.personalInformation.middlename} ${users.personalInformation.lastname}`}
              </h2>
              <p>
                Email:
                <span className="spanclass">
                  {users.personalInformation && users.personalInformation.email}
                </span>
              </p>
              <p>
                Mobile:
                <span className="spanclass">
                  {users.personalInformation &&
                    users.personalInformation.mobileNumber}
                </span>
              </p>
              <p>
                Gender:
                <span className="spanclass">
                  {users.personalInformation &&
                    users.personalInformation.gender}
                </span>
              </p>
              <p>
                Nationality:<span className="spanclass">Nepali</span>
              </p>
              <p>
                Date of Birth:
                <span className="spanclass">
                  {users.personalInformation &&
                    users.personalInformation.dateOfbirth}
                </span>
              </p>
              <p>
                Program:
                <span className="spanclass">
                  {users.program && users.program}
                </span>
              </p>
              <p>
                Program Specification:
                <span className="spanclass">
                  {users.specification && users.specification}
                </span>
              </p>
            </div>
          </div>

          <div className="studentinformation mt-5 mb-5">
            <Row>
              <Col md={6}>
                <div className="personalinformation">
                  <h5 className="mb-3">Current Address</h5>
                  <p>
                    Provision:
                    <span className="spanclass">
                      {users.currentAddress && users.currentAddress.provision}
                    </span>
                  </p>
                  <p>
                    District:
                    <span className="spanclass">
                      {users.currentAddress && users.currentAddress.district}
                    </span>
                  </p>
                  <p>
                    Municipality:
                    <span className="spanclass">
                      {users.currentAddress.municipality}
                    </span>
                  </p>
                  <p>
                    Ward no:
                    <span className="spanclass">
                      {users.currentAddress.wardno}
                    </span>
                  </p>
                  <p>
                    Tole:
                    <span className="spanclass">
                      {users.currentAddress.tole}
                    </span>
                  </p>

                  <h5 className="mb-3">Permanent Address</h5>
                  <p>
                    Provision:
                    <span className="spanclass">
                      {users.permanentAddress.provision}
                    </span>
                  </p>
                  <p>
                    District:
                    <span className="spanclass">
                      {users.permanentAddress.district}
                    </span>
                  </p>
                  <p>
                    Municipality:
                    <span className="spanclass">
                      {users.permanentAddress.municipality}
                    </span>
                  </p>
                  <p>
                    Ward no:
                    <span className="spanclass">
                      {users.permanentAddress.wardno}
                    </span>
                  </p>
                  <p>
                    Tole:
                    <span className="spanclass">
                      {users.permanentAddress.tole}
                    </span>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="otherinformation">
                  <h5 className="mb-3">Parents Information</h5>
                  <p>
                    Father's Name:
                    <span className="spanclass">
                      {users.parentsInformation.fathersname}
                    </span>
                  </p>
                  <p>
                    Father's Occupation:
                    <span className="spanclass">
                      {users.parentsInformation.fathersoccupation}
                    </span>
                  </p>
                  <p>
                    Father's Number:
                    <span className="spanclass">
                      {users.parentsInformation.mobilenumber}
                    </span>
                  </p>
                  <p>
                    Mother's Name:
                    <span className="spanclass">
                      {users.parentsInformation.mothersname}
                    </span>
                  </p>
                  <p>
                    Mother's Occupation:
                    <span className="spanclass">
                      {users.parentsInformation.mothersoccupation}
                    </span>
                  </p>
                  <p>
                    Mother's Number:
                    <span className="spanclass">
                      {users.parentsInformation.hermobilenumber}
                    </span>
                  </p>
                  <p>
                    Other Guardians:
                    <span className="spanclass">
                      {users.parentsInformation.guardianname}
                    </span>
                  </p>
                  <p>
                    Relation:
                    <span className="spanclass">
                      {users.parentsInformation.relation}
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="otherinformation mt-5 mb-5">
                <h5 className="mb-3">Academic Information</h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Board</th>
                      <th>Full Marks/credit</th>
                      <th>Marks Obtained/credit</th>
                      <th>Percent/GPA</th>
                      <th>Division/GPA</th>
                      <th>Passed Year</th>
                      <th>Major Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SLC/SEE</td>
                      <td>{users.educationQualification.board.slc}</td>
                      <td>{users.educationQualification.division.slc}</td>
                      <td>{users.educationQualification.fullmarks.slc}</td>
                      <td>{users.educationQualification.majorsubjects.slc}</td>
                      <td>{users.educationQualification.marksobtained.slc}</td>
                      <td>{users.educationQualification.passedyear.slc}</td>
                      <td>{users.educationQualification.percent.slc}</td>
                    </tr>
                    <tr>
                      <td>+2</td>
                      <td>{users.educationQualification.board.twelve}</td>
                      <td>{users.educationQualification.division.twelve}</td>
                      <td>{users.educationQualification.fullmarks.twelve}</td>
                      <td>
                        {users.educationQualification.majorsubjects.twelve}
                      </td>
                      <td>
                        {users.educationQualification.marksobtained.twelve}
                      </td>
                      <td>{users.educationQualification.passedyear.twelve}</td>
                      <td>{users.educationQualification.percent.twelve}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
          <h5 className="mb-3">Educational Documents</h5>
          <div className="mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.slc.marksheet}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.slc.character}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.slc.transfer}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.twelve.character}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.twelve.marksheet}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.twelve.provision}`}
                alt=""
                className="form-image me-5"
              />
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_PREFIX}${users.majordocuments.twelve.transfer}`}
                alt=""
                className="form-image me-5"
              />
            </div>
          </div>
          {/*  */}
        </Container>
      </div>
    </>
  );
};

export default StudentDetails;
