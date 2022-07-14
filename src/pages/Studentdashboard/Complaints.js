import React from 'react';
import { useState } from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';

function Complaints() {

  const [details, setDetails] = useState({
    name:'',
    email:'',
    complaint:'',
  });


  const postData = async(e) =>{
    e.preventDefault()
    const {name,email,complaint}=details;
    const res= await fetch("https://fir-project-e5317-default-rtdb.firebaseio.com/complaintform.json",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,email,complaint
      })
    })
  }


  return (

    <div className='com'>

      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
      <h1 className="text-center pt-3 text-secondary h2">Register Your Complaint</h1>

      <div>
      <div className='form-group'>
  <label className="col-form-label">Name</label>
  <input className='form-control' type="text" placeholder='enter name' onChange={(e) => setDetails({...details,name:e.target.value})}/>
  
  </div>

  <div className='form-group'>
  <label className="col-form-label">Email</label>
  <input className='form-control' type="email" placeholder='enter email' onChange={(e) => setDetails({...details,email:e.target.value})} />
  
  </div>
  <div className='form-group'>
  <label className="col-form-label">Complaint</label>
  <textarea  rows={5}  className='form-control' type="textarea" placeholder='write down your complaint' onChange={(e) => setDetails({...details,complaint:e.target.value})} />
  </div>
  <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
  <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={postData} >Submit</button>
  </div>
      </div>
         

</div>


    </div>
    
  );
}

export default StudentLayout(Complaints);
