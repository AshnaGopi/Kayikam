import '../AppS.css';
import Certificate from '../pages/Studentdashboard/Certificate';
import Events from '../pages/Studentdashboard/Events';
import Profile from '../pages/Studentdashboard/Profile';
import Result from '../pages/Studentdashboard/Result';
import Dashboard from '../pages/Studentdashboard/Dashboard';
import Navbar from '../components/Studentscomponents/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Complaints from '../pages/Studentdashboard/Complaints';


function Student() {
  return (
    <Router>
       {/* <Navbar/> */}
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
       </Switch>
    </Router>
  );
}

export default Student;
