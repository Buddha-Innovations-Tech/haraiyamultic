import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import BannerImage from "../../images/banner-image.png";
const Admission_Form = (e) => {
  const navigate = useNavigate();

  const [filterTerm, setFilterTerm] = useState();
  const [filterTermSpeci, setFilterTermSpeci] = useState();
  const [personImage, setPersonImage] = useState();
  const [pfirstName, setPFirstName] = useState("");
  const [pmiddleName, setPMiddleName] = useState("");
  const [plastName, setPLastName] = useState("");
  const [pgender, setPGender] = useState("male");
  const [pnationality, setPNationality] = useState("");
  const [pdate, setPDate] = useState("");
  const [pnumber, setPNumber] = useState();
  const [pemail, setPEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [fatherNumber, setFatherNumber] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [motherNumber, setMotherNumber] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [cProvinces, setCProvinces] = useState();
  const [cDistrict, setCDistrict] = useState("");
  const [cMunicipality, setCMunicipality] = useState("");
  const [cWard, setCWard] = useState("");
  const [ctole, setCtole] = useState("");
  const [perProvinces, setPerProvinces] = useState();
  const [perDistrict, setPerDistrict] = useState("");
  const [perMunicipality, setPerMunicipality] = useState("");
  const [perWard, setPerWard] = useState("");
  const [pertole, setPertole] = useState("");
  const [slcBoard, setSlcBoard] = useState("");
  const [slcFullMark, setSlcFullMark] = useState("");
  const [slcMarksObt, setSlcMarksObt] = useState("");
  const [slcPercent, setSlcPercent] = useState("");
  const [slcdivision, setSlcdivision] = useState("");
  const [slcPassedYear, setSlcPassedYear] = useState("");
  const [slcMajorSubjects, setSlcMajorSubjects] = useState("");
  const [plustwoBoard, setPlustwoBoard] = useState("");
  const [plustwoFullMark, setPlustwoFullMark] = useState("");
  const [plustwoMarksObt, setPlustwoMarksObt] = useState("");
  const [plustwoPercent, setPlustwoPercents] = useState("");
  const [plustwodivision, setPlustwodivision] = useState("");
  const [plustwoPassedYear, setPlustwoPassedYear] = useState("");
  const [plustwoMajorSubjects, setPlustwoMajorSubjects] = useState("");
  const [slcMarksheet, setSlcMarksheet] = useState();
  const [slcTransfer, setSlcTransfer] = useState();
  const [slcCharacter, setSlcCharacter] = useState();
  const [plustwoMarksheet, setPlustwoMarksheet] = useState();
  const [plustwoCharacter, setPlustwoCharacter] = useState();
  const [plustwoTransfer, setPlustwoTransfer] = useState();
  const [plustwoProvision, setPlustwoProvision] = useState();

  const uploadHandler = async (e, d) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/uploads/", formData, config);

      switch (d.toString()) {
        case "slcMarksheet":
          setSlcMarksheet(data);
          break;
        case "slcTransfer":
          setSlcTransfer(data);
          break;
        case "slcCharacter":
          setSlcCharacter(data);
          break;
        case "plustwoMarksheet":
          setPlustwoMarksheet(data);
          break;
        case "plustwoCharacter":
          setPlustwoCharacter(data);
          break;
        case "plustwoTransfer":
          setPlustwoTransfer(data);
          break;
        case "plustwoProvision":
          setPlustwoProvision(data);
          break;
        case "personImage":
          setPersonImage(data);
          break;

        default:
          console.log("not match");
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAdmissionForm = async (e) => {
    e.preventDefault();
    const tokenAuth = localStorage.getItem("user");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenAuth}`,
      },
    };
    await axios.post(
      "/api/forms/create",
      {
        program: filterTerm,

        specification: filterTermSpeci,
        image: personImage,
        personalInformation: {
          firstname: pfirstName,
          middlename: pmiddleName,
          lastname: plastName,
          gender: pgender,
          dateOfbirth: pdate,
          mobileNumber: pnumber,
          email: pemail,
        },
        parentsInformation: {
          fathersname: fatherName,
          fathersoccupation: fatherOccupation,
          mobilenumber: fatherNumber,
          mothersname: motherName,
          mothersoccupation: motherOccupation,
          hermobilenumber: motherNumber,
          guardianname: guardianName,
          relation: guardianRelation,
        },

        currentAddress: {
          provision: cProvinces,
          district: cDistrict,
          municipality: cMunicipality,
          wardno: cWard,
          tole: ctole,
        },

        permanentAddress: {
          provision: perProvinces,
          district: perDistrict,
          municipality: perMunicipality,
          wardno: perWard,
          tole: pertole,
        },

        educationQualification: {
          board: {
            slc: slcBoard,
            twelve: plustwoBoard,
          },
          fullmarks: {
            slc: slcFullMark,
            twelve: plustwoFullMark,
          },
          marksobtained: {
            slc: slcMarksObt,
            twelve: plustwoMarksObt,
          },
          percent: {
            slc: slcPercent,
            twelve: plustwoPercent,
          },
          division: {
            slc: slcdivision,
            twelve: plustwodivision,
          },
          passedyear: {
            slc: slcPassedYear,
            twelve: plustwoPassedYear,
          },
          majorsubjects: {
            slc: slcMajorSubjects,
            twelve: plustwoMajorSubjects,
          },
        },
        majordocuments: {
          slc: {
            marksheet: slcMarksheet,
            character: slcCharacter,
            transfer: slcTransfer,
          },
          twelve: {
            marksheet: plustwoMarksheet,
            character: plustwoCharacter,
            transfer: plustwoTransfer,
            provision: plustwoProvision,
          },
        },
      },
      config
    );
  };
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
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
          <form onSubmit={handleAdmissionForm}>
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
                      <div className="dropdown">
                        <select
                          className="notice-select"
                          value={filterTerm}
                          onChange={(e) => setFilterTerm(e.target.value)}
                        >
                          <option> Program</option>
                          <option value="BBS"> BBS</option>
                          <option value="BED">BED</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="area">
                    <p className="form-field">
                      Area of Specification
                      <span className="form-symbol">*</span>
                    </p>
                    <div className="dropdown choose-specification">
                      <div className="dropdown">
                        <select
                          className="notice-select"
                          value={filterTermSpeci}
                          onChange={(e) => setFilterTermSpeci(e.target.value)}
                        >
                          <option> Specification</option>
                          <option value="English"> English</option>
                          <option value="Nepali">Nepali</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-div-form-content">
                  <img
                    src={`http://localhost:5000${personImage}`}
                    alt=""
                    className="form-image"
                  />
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => uploadHandler(e, "personImage")}
                  />
                </div>
              </div>
              <div className="second-div-form">
                <p className="admission-head">Personal Information</p>
                <div className="second-div-form-content">
                  <div className="form-row personal-row">
                    <div className="row gy-3">
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          First Name<span className="form-symbol">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          value={pfirstName}
                          onChange={(e) => setPFirstName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={pmiddleName}
                          onChange={(e) => setPMiddleName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Last Name<span className="form-symbol">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={plastName}
                          onChange={(e) => setPLastName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 middle-name">
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
                              value="male"
                              checked={pgender === "male"}
                              onChange={(e) => setPGender(e.target.value)}
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
                              value="female"
                              checked={pgender === "female"}
                              onChange={(e) => setPGender(e.target.value)}
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
                              value="others"
                              checked={pgender === "others"}
                              onChange={(e) => setPGender(e.target.value)}
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
                        <input
                          type="text"
                          className="form-control nationality"
                          value={pnationality}
                          onChange={(e) => setPNationality(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>
                          Date of Birth<span className="form-symbol">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control date"
                          value={pdate}
                          onChange={(e) => setPDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 middle-name">
                        <label>Mobile Number</label>
                        <input
                          type="number"
                          className="form-control"
                          value={pnumber}
                          onChange={(e) => setPNumber(e.target.value)}
                        />
                      </div>

                      <div className="form-group col-md-4 middle-name">
                        <label>email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={pemail}
                          onChange={(e) => setPEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-div-form">
                <p className="admission-head">Parent's Information</p>
                <div className="second-div-form-content">
                  <form>
                    <div className="form-row personal-row">
                      <div className="row gy-3">
                        <div className="form-group col-md-4 first-name">
                          <label>
                            Father Name<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>Father Occupation</label>
                          <input
                            type="text"
                            className="form-control"
                            value={fatherOccupation}
                            onChange={(e) =>
                              setFatherOccupation(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Mobile Number<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={fatherNumber}
                            onChange={(e) => setFatherNumber(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Mother's Name<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={motherName}
                            onChange={(e) => setMotherName(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Mother Occupation
                            <span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={motherOccupation}
                            onChange={(e) =>
                              setMotherOccupation(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Mobile Number<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control date"
                            value={motherNumber}
                            onChange={(e) => setMotherNumber(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 first-name">
                          <label>Guardian's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={guardianName}
                            onChange={(e) => setGuardianName(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>Relation</label>
                          <input
                            type="text"
                            className="form-control"
                            value={guardianRelation}
                            onChange={(e) =>
                              setGuardianRelation(e.target.value)
                            }
                          />
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
                      <div className="row gy-3">
                        <div className="form-group col-md-4 first-name">
                          <label for="exampleFormControlSelect1">
                            Provision<span className="form-symbol">*</span>
                          </label>
                          <div className="dropdown">
                            <select
                              className="notice-select"
                              value={cProvinces}
                              onChange={(e) => setCProvinces(e.target.value)}
                            >
                              <option value="Province 1"> Province 1</option>
                              <option value="Province 2">Province 2</option>
                              <option value="Province 3">Province 3</option>
                              <option value="Province 4">Province 4</option>
                              <option value="Province 5">Province 5</option>
                              <option value="Province 6">Province 6</option>

                              <option value="Province 7">Province 7</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label for="exampleFormControlSelect1">
                            District<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={cDistrict}
                            onChange={(e) => setCDistrict(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label for="exampleFormControlSelect1">
                            Municipality<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={cMunicipality}
                            onChange={(e) => setCMunicipality(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            ward no<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={cWard}
                            onChange={(e) => setCWard(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Tole<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={ctole}
                            onChange={(e) => setCtole(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="second-div-form">
                <p className="admission-head">Permanent Address</p>

                <div className="second-div-form-content">
                  <form>
                    <div className="form-row permanet-address-row">
                      <div className="row gy-3">
                        <div className="form-group col-md-4 first-name">
                          <label for="exampleFormControlSelect1">
                            Provision<span className="form-symbol">*</span>
                          </label>
                          <div className="dropdown">
                            <select
                              className="notice-select"
                              value={perProvinces}
                              onChange={(e) => setPerProvinces(e.target.value)}
                            >
                              <option value="Province 1"> Province 1</option>
                              <option value="Province 2">Province 2</option>
                              <option value="Province 3">Province 3</option>
                              <option value="Province 4">Province 4</option>
                              <option value="Province 5">Province 5</option>
                              <option value="Province 6">Province 6</option>

                              <option value="Province 7">Province 7</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label for="exampleFormControlSelect1">
                            District<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={perDistrict}
                            onChange={(e) => setPerDistrict(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label for="exampleFormControlSelect1">
                            Municipality<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={perMunicipality}
                            onChange={(e) => setPerMunicipality(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            ward no<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={perWard}
                            onChange={(e) => setPerWard(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-4 middle-name">
                          <label>
                            Tole<span className="form-symbol">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={pertole}
                            onChange={(e) => setPertole(e.target.value)}
                          />
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
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcBoard}
                            onChange={(e) => setSlcBoard(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="number"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcFullMark}
                            onChange={(e) => setSlcFullMark(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="number"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcMarksObt}
                            onChange={(e) => setSlcMarksObt(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="number"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcPercent}
                            onChange={(e) => setSlcPercent(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcdivision}
                            onChange={(e) => setSlcdivision(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcPassedYear}
                            onChange={(e) => setSlcPassedYear(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={slcMajorSubjects}
                            onChange={(e) =>
                              setSlcMajorSubjects(e.target.value)
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="education-list">+2</th>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoBoard}
                            onChange={(e) => setPlustwoBoard(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoFullMark}
                            onChange={(e) => setPlustwoFullMark(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoMarksObt}
                            onChange={(e) => setPlustwoMarksObt(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoPercent}
                            onChange={(e) => setPlustwoPercents(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwodivision}
                            onChange={(e) => setPlustwodivision(e.target.value)}
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoPassedYear}
                            onChange={(e) =>
                              setPlustwoPassedYear(e.target.value)
                            }
                          />
                        </td>
                        <td style={{ width: "200px" }}>
                          <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              width: "100%",
                            }}
                            value={plustwoMajorSubjects}
                            onChange={(e) =>
                              setPlustwoMajorSubjects(e.target.value)
                            }
                          />
                        </td>
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
                          onChange={(e) => uploadHandler(e, "slcMarksheet")}
                        />
                      </div>

                      <div className="custom-file document-file">
                        <p className="document-list">Character Certificate</p>
                        <input
                          type="file"
                          className="custom-file-input document-store"
                          id="customFile"
                          onChange={(e) => uploadHandler(e, "slcCharacter")}
                        />
                      </div>

                      <div className="custom-file document-file">
                        <p className="document-list">Transfer Certificate</p>
                        <input
                          type="file"
                          className="custom-file-input document-store"
                          id="customFile"
                          onChange={(e) => uploadHandler(e, "slcTransfer")}
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
                          onChange={(e) => uploadHandler(e, "plustwoMarksheet")}
                        />
                      </div>
                      <div className="custom-file document-file">
                        <p className="document-list">Character Certificate</p>
                        <input
                          type="file"
                          className="custom-file-input document-store"
                          id="customFile"
                          onChange={(e) => uploadHandler(e, "plustwoCharacter")}
                        />
                      </div>
                      <div className="custom-file document-file">
                        <p className="document-list">Transfer Certificate</p>
                        <input
                          type="file"
                          className="custom-file-input document-store"
                          id="customFile"
                          onChange={(e) => uploadHandler(e, "plustwoTransfer")}
                        />
                      </div>
                      <div className="custom-file document-file">
                        <p className="document-list">Provision Certificate</p>
                        <input
                          type="file"
                          className="custom-file-input document-store"
                          id="customFile"
                          onChange={(e) => uploadHandler(e, "plustwoProvision")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="application-button">
                <button type="button" className="btn btn-secondary btn-discard">
                  Discard
                </button>
                <button
                  type="button"
                  onClick={handleAdmissionForm}
                  className="btn btn-primary btn-save"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Admission_Form;
