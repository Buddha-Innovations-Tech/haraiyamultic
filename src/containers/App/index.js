import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//components

// import SideBar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import Fotter from '../../components/Footter';

//pages

import Home from '../Home';
import About from '../About';
import Message from '../Message';
import Managment from '../Managment';
import Team from '../Team';
import Cells from '../Cells';
import BBS from '../BBS';

import BED from '../BE.d';
import Report from '../Report';
import Syllabus from '../syllabus';
import Photos from '../Photos';
import Gallery from '../Gallery';
import Videos from '../Videos';
import Notice from '../Notice';
import Event from '../Event';
import Alumini from '../Alumini';
import Contact from '../Contact';
import StudentZone from '../Student_zone';
import AdmissionForm from '../Admission';

import EventDescription from '../Event_Description';
import SingleNotice from '../SingleNotice';
import Login from '../Login';
import MiniNavbar from '../../components/MiniNavbar';
import Register from '../Register';
import axios from 'axios';
import StudentList from '../StudentList';
import StudentDetails from '../StudentDetails';
import ScrollToTop from '../../components/ScrollToTop';
import QAA from '../QAA';
import gql from 'graphql-tag';
import Query from '../../components/Query';
import Popup from '../../components/Popup';
const App = () => {
  const GET_POPUPS = gql`
    query NewQuery {
      popupNotices {
        nodes {
          title
          popupNotice {
            noticeImage {
              mediaItemUrl
              srcSet
            }
          }
        }
      }
    }
  `;
  // axios.defaults.baseURL = "https://student-forms.herokuapp.com/";
  axios.defaults.baseURL = 'https://forms.hmc.edu.np/';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Query query={GET_POPUPS}>
        {({ data: { popupNotices } }) => {
          if (popupNotices.nodes.length === 0) {
            setShowPopup(false);
          }
          return (
            popupNotices.nodes.length > 0 &&
            showPopup && (
              <Popup setShowPopup={setShowPopup} data={popupNotices.nodes} />
            )
          );
        }}
      </Query>

      {/* <MiniNavbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/message' element={<Message />} />
        <Route path='/managment_commitee' element={<Managment />} />
        <Route path='/team' element={<Team />} />
        <Route path='/cells' element={<Cells />} />
        <Route path='/academics/:id' element={<BBS />} />

        <Route path='/bed' element={<BED />} />

        <Route path='/report' element={<Report />} />
        <Route path='/syllabus' element={<Syllabus />} />
        <Route path='/photos' element={<Photos />} />
        {/* <Route path="/photos" element={<Gallery />} /> */}
        <Route path='/photosfull/:id' element={<Gallery />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/singlenotice/:id' element={<SingleNotice />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event_description/:id' element={<EventDescription />} />
        <Route path='/alumini' element={<Alumini />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/student_zone' element={<StudentZone />} />
        <Route path='/admission_form' element={<AdmissionForm />} />
        <Route
          path='/login'
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/qaa' element={<QAA />} />

        <Route path='/studentlist' element={<StudentList />} />
        <Route path='/studentdetails/:id' element={<StudentDetails />} />
      </Routes>

      <Fotter />
    </BrowserRouter>
  );
};

export default App;

// <Route path="/" element={<Home />} />
// <Route path="/alumini" element={<Alumini />} />
// <Route path="/message" element={<Message />} />
// <Route path="/about" element={<About />} />
