import React from 'react';
import { useState } from 'react';

function Profile() {

  const [details, setDetails] = useState({
    name:'',
    semester:'',
    admno:'',
    regno:'',
    address:'',
    phone:'',
    email:'',
  });

  const postData = async(e) =>{
    e.preventDefault()
    const {name,semester,admno,regno,address,phone,email}=details;
    const res= await fetch("https://fir-sidebar-default-rtdb.firebaseio.com/proform.json",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,semester,admno,regno,address,phone,email
      })
    })
  }



  return (
    <div className='com'>

    <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
    <h1 className="text-center pt-3 text-secondary h2">Fill Your Details</h1>

    <div>
    <div className='form-group'>
<label className="col-form-label">Name</label>
<input className='form-control' type="text" placeholder='Enter name' onChange={(e) => setDetails({...details,name:e.target.value})}/>

</div>

<div className='form-group'>
<label className="col-form-label">Semester</label>
<select className='form-control' onChange={(e) => setDetails({...details,semester:e.target.value})}>
<option value="select">Select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</select>

</div>

<div className='form-group'>
<label className="col-form-label">Admission No</label>
<input className='form-control' type="text" placeholder='Enter Admission No' onChange={(e) => setDetails({...details,admno:e.target.value})}/>

</div>

<div className='form-group'>
<label className="col-form-label">Register No</label>
<input className='form-control' type="text" placeholder='Enter Register No' onChange={(e) => setDetails({...details,regno:e.target.value})}/>

</div>

<div className='form-group'>
<label className="col-form-label">Address</label>
<textarea className='form-control' rows={3} type="textarea" placeholder='Enter Address' onChange={(e) => setDetails({...details,address:e.target.value})}/>

</div>
<div className='form-group'>
<label className="col-form-label">Phone</label>
<input className='form-control' type="phone" placeholder='Enter Phone No' onChange={(e) => setDetails({...details,phone:e.target.value})}/>

</div>

<div className='form-group'>
<label className="col-form-label">Email</label>
<input className='form-control' type="email" placeholder='Enter Email' onChange={(e) => setDetails({...details,email:e.target.value})} />

</div>

<div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
<button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={postData} >Submit</button>
</div>
    </div>
       

</div>


  </div>
  );
}

export default Profile;
