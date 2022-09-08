import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StudentLayout from '../../components/HOC/StudentLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';

function Complaints() {

  const {user} = useAuthContext()

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false);
  const [complaint, setcomplaint] = useState(null);

  const {
    register,
     handleSubmit,
     formState:{errors},
   }=useForm()

   

  const postData = async(data) =>{
    setloading(true);
    console.log(data);
    const {error } = await supabase.from('complaints').insert([
      {student_id:data.id,email:data.email,complaint:data.complaint  }
      
    ])
    setloading(false);
  }


  return (

    <div className='com'>

      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
      <h1 className="text-center pt-3 text-secondary h2">Register Your Complaint</h1>

      <form onSubmit={handleSubmit(postData)}>
      {/* <div className='form-group'>
  <label className="col-form-label">Name</label>
  <input className='form-control' type="text"  placeholder='enter name' {...register("name", {required:"This field is required"})} />
  {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}
  
  </div> */}

  <div className='form-group'>
  <label className="col-form-label">Email</label>
  <input className='form-control' type="email" placeholder='enter email' {...register("email", {required:"This field is required"})} />
  {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
  
  </div>
  <div className='form-group'>
  <label className="col-form-label">Complaint</label>
  <textarea  rows={5}  className='form-control'  type="textarea" placeholder='write down your complaint' {...register("complaint", {required:"This field is required"})} />
  {errors.complaint && (<small className='text-danger'>{errors.complaint.message}</small>)}
  </div>
  <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
  <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit' >{loading ? 'Loading...' : 'Submit' }</button>
  </div>
      </form>
         

</div>


    </div>
    
  );
}

export default StudentLayout(Complaints);
