import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { signUp } from '../../SupabaseHelper';




function Reg() {

  const history = useHistory()
  // const {user} = useAuthContext()

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false);

       const {
        register,
         handleSubmit,
         formState:{errors},
       }=useForm();


       const onSubmit = async (data) => {
        console.log(data);
        seterror(null)
        setloading(true)
        const {error} = await signUp({email: data.email, password: data.password, data:data})
        setloading(false)
        error ? seterror(error) : history.push('/student/dashboard')
    }
  
  return (

    <div className='col-sm-6 shadow rounded g-5'>
<div>
  <h1 className="text-center pt-3 text-secondary h2">Register</h1>

  <div>

    <form onSubmit={handleSubmit(onSubmit)}>

{/* name */}
  <div className='form-group'>
    <label className="col-form-label">Name</label>
    <input className='form-control' type="text" placeholder='enter name' {...register("name", {required:"This field is required"})}/>
    {errors.name && (<small className='text-danger'>{errors.name.message}</small>)} 
    </div>

    {/* gender */}
    <div className='form-group'>
      <h9>Gender</h9>
      <div className='form-check'>
        <label className="col-form-label">Male</label>
        <input className='form-check-input' type="radio" value='male' {...register("gender", {required:"This field is required",
          message:"Invalid name",})}/>
      </div>
      <div className='form-check'>
        <label className="col-form-label">Female</label>
        <input className='form-check-input' type="radio" value='female' {...register("gender", {required:"This field is required",
        message:"Invalid name",})}/>
      </div>
      <div className='form-check'>
        <label className="col-form-label">Other</label>
        <input className='form-check-input' type="radio" value='other' {...register("gender", {required:"This field is required",
        message:"Invalid name",})}/>
      </div>
      {errors.name && (<small className='text-danger'>{errors.name.message}</small>)} 
    </div>

{/* ktu id */}
    <div className='form-group'>
    <label className="col-form-label">KTU ID</label>
    <input className='form-control' type="text" placeholder='enter name' {...register("ktu_id", {required:"This field is required"})}/>
    {errors.ktu_id && (<small className='text-danger'>{errors.ktu_id.message}</small>)} 
    </div>

{/* semester */}
    <div className='form-group'>
    <label className="col-form-label">Semester</label>
    <input className='form-control' type="text" placeholder='enter Semester' {...register("semester", {required:"This field is required"})}/>
    {errors.semester && (<small className='text-danger'>{errors.semester.message}</small>)} 
    </div>

    {/* branch */}
    <div className='form-group'>
    <label className="col-form-label">Branch</label>
    <input className='form-control' type="text" placeholder='enter Branch' {...register("branch", {required:"This field is required"})}/>
    {errors.branch && (<small className='text-danger'>{errors.branch.message}</small>)} 
    </div>

    <div className='form-group'>
    <label className="col-form-label">Email</label>
    <input className='form-control' type="email" placeholder='enter email' {...register("email", {required:"Email is required",
       message:"Invalid email address",})}/>
       {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} 
    </div>
    <div className='form-group'>
    <label className="col-form-label">Password</label>
    <input className='form-control' type="password" placeholder='enter password'  {...register("password", {required:"Password is required",
       message:"Invalid password",})} />
        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
        </div>
    <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
    <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit' >
      {loading ? 'Loading...' : 'Register' }
      </button>
    </div>    
    </form>
  </div>

</div>
    </div>

  );
}

export default Reg;


