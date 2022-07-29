import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
import FacultyLayout from '../../components/HOC/FacultyLayout';
import { facultySignUp } from '../../SupabaseHelper';




function FacultyReg() {

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
        seterror(null)

        await facultySignUp({
          email: data.email, 
          password: data.password, 
          data:data, 
          seterror: seterror, 
          setloading: setloading,
          history: history})
        setloading(false)
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

export default FacultyReg;


