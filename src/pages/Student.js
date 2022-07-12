import './AppS.css';
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
       <Navbar/>
       <Switch>
        
        <Route path='/student/login/events' component={Events}/>
        <Route path='/student/login/profile' component={Profile}/>
        <Route path='/student/login/certificate' component={Certificate}/>
        <Route path='/student/login/result' component={Result}/>
        <Route path='/student/login/complaints' component={Complaints}/>
       </Switch>
    </Router>
  );
}

export default Student;
