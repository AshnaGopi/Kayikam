import React from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';
import {useState} from 'react';

function Certificate() {

  const [user, setuser] = useState(false);

  return (
    <>
    {
      user ? 
    <div>
    <div className='cert' style={{marginTop:"100px"}}>
      <h1>No Certificates Available</h1>
    </div></div> :
    <div className='com'>
    <h1 style={{marginLeft:"100px"}}>Collect Your Certificate</h1>
      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',marginTop:"30px"}}>
      Certificate available
  
     
        <button className='btn btn-dark submit-btn rounded px-5' style={{flexDirection:"row-reverse" ,marginLeft:"200px",marginTop:"30px"}}>Download</button>
     
        
      </div>
    </div>

    },
    </>
  );
  }

export default StudentLayout(Certificate);
