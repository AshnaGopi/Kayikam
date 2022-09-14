
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Visiblepages/Home';
import AboutUs from './pages/Visiblepages/AboutUs';
import NotFound from './pages/Visiblepages/NotFound';
import Nav from './components/Visiblecomponents/Nav';
import Login from './pages/Visiblepages/Login';
import Register from './pages/Visiblepages/Register';
import Dashboard from './pages/Studentdashboard/Dashboard';
import { useState } from 'react';
import Student from './pages/Student';
import Facultyform from './pages/Visiblepages/Facultyform';
import Faculty from './pages/Faculty';
import CertApp from './CertApp';
import FacultyReg from './pages/Facultypages/FacultyReg';

import Certificate from './pages/Studentdashboard/Certificate';
import Events from './pages/Studentdashboard/Events';
import Profile from './pages/Studentdashboard/Profile';
import Result from './pages/Studentdashboard/Result';
import Complaints from './pages/Studentdashboard/Complaints';
import './AppS.css';
import FacultyDashboard from './pages/Facultypages/FacultyDashboard';
import EventReg from './pages/Facultypages/EventReg';
import StudentDetails from './pages/Facultypages/StudentDetails';
import GenerateCertificate from './pages/Facultypages/GenerateCertificate';
import ResultAnnouncement from './pages/Facultypages/ResultAnnouncement';
import News from './pages/Facultypages/News';
import Lastcert from './Certificate/Lastcert';
import ComplaintForms from './pages/Facultypages/ComplaintForms';


function App() {

  return (
    <Router>
      <Switch>
      <Route path='/student/dashboard'>
        <Dashboard/>
         
      </Route>
       <Route path='/student/events' >
         <Events/>
       </Route>
       <Route path='/student/profile'><Profile/></Route>
       <Route path='/student/certificate'><Certificate/></Route>
       <Route path='/student/result'><Result/></Route>
       <Route path='/student/complaints'><Complaints/></Route>
      {/* </Switch> */}
      {/* <Student/> */}
      
      {/* <Faculty/> */}
      {/* <Switch> */}
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/student/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/faculty/login">
          <Facultyform />
        </Route>
        <Route path='/faculty/register'>
          <FacultyReg/>
        </Route>
        <Route path='/faculty/dashboard'>
          <FacultyDashboard/>
       </Route>
        <Route path='/faculty/eventreg' >
          <EventReg/>
        </Route>
        <Route path='/faculty/studentdetails'><StudentDetails/></Route>
        <Route path='/faculty/certapp'>
          <Lastcert/>
        </Route>
        <Route path='/faculty/generatecertificate'><GenerateCertificate/></Route>
        <Route path='/faculty/news'><News/></Route>
        <Route path='/faculty/resultannounce'><ResultAnnouncement/></Route>
        <Route path='/faculty/complaintforms'><ComplaintForms/></Route>
        
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
      
    </Router>

  )
}
export default App;


// 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