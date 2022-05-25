import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//components

// import SideBar from '../../components/Sidebar';
import NavBar from "../../components/Navbar";
import Fotter from "../../components/Footter";

//pages

import Home from "../Home";
import About from "../About";
import Message from "../Message";
import Managment from "../Managment";
import Team from "../Team";
import Cells from "../Cells";
import BBS from "../BBS";
import BBS_CURRICULALR from "../BBS_Curricular";
import BBS_ADMISSION from "../BBS_Admission";
import BBS_GRADING from "../BBS_Grading";
import BED from "../BE.d";
import Report from "../Report";
import Syllabus from "../syllabus";
import Photos from "../Photos";
import Gallery from "../Gallery";
import Videos from "../Videos";
import Notice from "../Notice";
import Event from "../Event";
import Alumini from "../Alumini";
import Contact from "../Contact";
import StudentZone from "../Student_zone";
import AdmissionForm from "../Admission";
import BED_CURRICULAR from "../BE.d_Curricular";
import BED_ADMISSION from "../BE.d_Admission";
import BED_GRADING from "../BE.d_Grading";
import EventDescription from "../Event_Description";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <section className="contentWrapper"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/managment_commitee" element={<Managment />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cells" element={<Cells />} />
        <Route path="/bbs" element={<BBS />} />
        <Route path="/bbs_curricular" element={<BBS_CURRICULALR />} />
        <Route path="/bbs_admission" element={<BBS_ADMISSION />} />
        <Route path="/bbs_grading" element={<BBS_GRADING />} />
        <Route path="/bed" element={<BED />} />
        <Route path="/bed_curicular" element={<BED_CURRICULAR />} />
        <Route path="/bed_admision" element={<BED_ADMISSION />} />
        <Route path="/bed_grading" element={<BED_GRADING />} />
        <Route path="/report" element={<Report />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event_description" element={<EventDescription />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student_zone" element={<StudentZone />} />
        <Route path="/admission_form" element={<AdmissionForm />} />
      </Routes>
      {/* </section> */}
      <Fotter />
    </BrowserRouter>
  );
};

export default App;

// <Route path="/" element={<Home />} />
// <Route path="/alumini" element={<Alumini />} />
// <Route path="/message" element={<Message />} />
// <Route path="/about" element={<About />} />
