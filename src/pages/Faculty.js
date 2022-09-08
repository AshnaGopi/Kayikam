import '../AppS.css';
import Navbar from '../components/Studentscomponents/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Complaints from '../pages/Studentdashboard/Complaints';
import StudentDetails from './Facultypages/StudentDetails';
import FacultyDashboard from './Facultypages/FacultyDashboard';
import EventReg from './Facultypages/EventReg';
import GenerateCertificate from './Facultypages/GenerateCertificate';
import ResultAnnouncement from './Facultypages/ResultAnnouncement';
import ComplaintForms from './Facultypages/ComplaintForms';
import CertApp from '../CertApp';
import News from './Facultypages/News';
import Lastcert from '../Certificate/Lastcert';


function Faculty() {
  return (
    <Router>
       {/* <Navbar/> */}
       <Switch>
        
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
       </Switch>
    </Router>
  );
}

export default Faculty;
