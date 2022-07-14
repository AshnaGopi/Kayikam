import React from 'react';
import { useState } from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';

function Events() {

  const [details, setDetails] = useState({
    name:'',
    email:'',
    complaint:'',
  });

  return (
    <div className='com'>

      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
      <h1 className="text-center pt-3 text-secondary h2">Event Registration</h1>

      <div>
      <div className='form-group'>
  <label className="col-form-label">Name</label>
  <input className='form-control' type="text" placeholder='enter name' onChange={(e) => setDetails({...details,name:e.target.value})}/>
  
  </div>

  <div className='form-group'>
  <label className="col-form-label">Email</label>
  <input className='form-control' type="email" placeholder='enter email' onChange={(e) => setDetails({...details,email:e.target.value})} />
  
  </div>
  
  <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
  <button className='btn btn-dark submit-btn rounded m-3 px-5' >Submit</button>
  </div>
      </div>
         

</div>


    </div>
  );
}

export default StudentLayout(Events);

