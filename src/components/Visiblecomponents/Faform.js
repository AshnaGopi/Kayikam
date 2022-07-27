
import { useState } from 'react';
import { auth } from '../../firebase';
import GeneralLayout from '../HOC/GeneralLayout';
import { useHistory } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { signIn } from '../../SupabaseHelper';

function FaForm() {

  const {
    register,
     handleSubmit,
     formState:{errors},
   }=useForm()

   const history = useHistory()


   const [loading, setloading] = useState(false);
   const [error, seterror] = useState(false);
 
  const onSubmit = async (data) => {
   console.log(data);
   const {error} = await signIn({email: data.email, password: data.password})
   error ? seterror(true) : history.push('/faculty/dashboard')
  }

  


  // const logout = () => {
  //   signOut(auth).then(() => setUser(null)).catch((err) => {
  //     const error = err.message
  //   }
  //   )
  // }


  return (
    <div className='col-sm-4 shadow rounded g-5'>
      
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Faculty Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* <div className='form-group'>
              <label className="col-form-label">Name</label>
              <input className='form-control' type="text" placeholder='enter email' onChange={(e) => setLoginName(e.target.value)} />

            </div> */}

            <div className='form-group'>
              <label className="col-form-label">Email</label>
              <input className='form-control' type="email" placeholder='enter email' {...register("email", {required:"Email is required"})}/>
              {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}

            </div>
            <div className='form-group'>
              <label className="col-form-label">Password</label>
              <input className='form-control' type="password" placeholder='enter password' {...register("password", {required:"Password is required"})} />
              {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5'>Sign In</button>
              <a href='/faculty/facultydashboard' class='link'>Faculty</a>
            </div>
           
          </form>
        </div>
    </div>
  );
}

export default FaForm;

 //export default GeneralLayout(FaForm);


