import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import {useState} from 'react';
import { Row } from 'react-bootstrap';
import Resulttable from './Resulttable';

function ResultAnnouncement({list}) {

  const [details, setdetails] = useState({
    name:'',
    sem:'',
    event:'',
  });
  const [data, setdata] = useState(false);

   const Submit= () =>{
    list=details;
    setdata(data);
   }
  return (
    <>
    <Row>


    <div className='col-sm-4 shadow rounded g-5'>
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Enter Result</h1>

          <div>

            <div className='form-group'>
              <label className="col-form-label">Name</label>
              <input className='form-control' type="text" placeholder='Enter name' onChange={(e) => setdetails({...details,name:e.target.value})} />

            </div>
            <div className='form-group'>
              <label className="col-form-label">Semester</label>
              <input className='form-control' type="text" placeholder='Enter semester' onChange={(e) => setdetails({...details,sem:e.target.value})} />
            </div>
            <div className='form-group'>
              <label className="col-form-label">Event</label>
              <input className='form-control' type="text" placeholder='Enter event' onChange={(e) => setdetails({...details,event:e.target.value})} />

            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={Submit}  >Submit</button>
            </div>
           
          </div>
        </div>
    </div>
   <Resulttable/>
    </Row>
    </>
  );
}


//export default ResultAnnouncement;
 export default FacultyLayout(ResultAnnouncement);
