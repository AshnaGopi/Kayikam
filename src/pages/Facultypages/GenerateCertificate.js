import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import TableData from './Tabledata';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

function GenerateCertificate() {

  const [nam, setnam] = useState("");
  const [clas, setclas] = useState("");
  const [eve, seteve] = useState("");
  const [pos, setpos] = useState("");
  const [date, setdate] = useState("");

  const history = useHistory()

  const Generate=() =>{
    history.push("/faculty/certapp")
    clearState();
  }
  const clearState = () => {
    setnam('');
    seteve('');
    setclas('');
    setpos('');
    setdate('');
  };


  return (
    <div className='com'>


    <div className='col-sm-6 shadow rounded g-5' style={{padding:'30px',}}>
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Generate Certificate</h1>

          <div>

            <div className='form-group'>
              <label className="col-form-label">Name</label>
              <input className='form-control' type="text" value={nam} placeholder='Enter name' onChange={(item) =>{
  setnam(item.target.value)}} />

            </div>
            <div className='form-group'>
              <label className="col-form-label">Class</label>
              <input className='form-control' type="text" value={clas} placeholder='Enter semester' onChange={(item) => {
  setclas(item.target.value)}} />
            </div>
            <div className='form-group'>
              <label className="col-form-label">Event</label>
              <input className='form-control' type="text" value={eve} placeholder='Enter event' onChange={(item) =>{
  seteve(item.target.value)}} />
            </div>
            <div className='form-group'>
              <label className="col-form-label">Position</label>
              <input className='form-control' type="text" value={pos} placeholder='Enter position' onChange={(item) =>{
  setpos(item.target.value)}} />

            </div>
            <div className='form-group'>
              <label className="col-form-label">Date</label>
              <input className='form-control' type="text" value={date} placeholder='Enter date' onChange={(item) =>{
  setdate(item.target.value)}} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={Generate}  >Generate Certificate</button>
            </div>
           
          </div>
        </div>
    </div>
  
    </div>
  );
}

//export default GenerateCertificate;
 export default FacultyLayout(GenerateCertificate);
