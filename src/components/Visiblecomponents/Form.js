// import React from 'react';
// import {useForm} from 'react-hook-form';
// import { useState } from 'react';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

// function Form() {

//     // const {        {formSubc}
//     //   register,
//     //   handleSubmit,
//     //   formState: {errors},
//     //   reset,
//     // }=useForm();

//     // const onSub=(data) => {
//     //   data.id=Date.now();
//     //   //data.fav=false;
//     //   formSubc(data);
//     //   console.log(data);
//     //   reset();
//     // };

//     const login = () => {
//       signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential) => {
//         const user = userCredential.user
//         setUser(user)
//       }).catch((err) => {
//         const error = err.message
//       }
//       )
//     }

//     const logout = () =>{
//       signOut(auth).then(()=>setUser(null)).catch((err) => {
//         const error = err.message
//       }
//       )
//     }

//     const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [user, setUser] = useState("");

//   return (
//     <div className='col-sm-4 shadow rounded g-5'>
//       {user ? <div><h1>{user.loginEmail}</h1>
//       <button onClick={logout}>log out</button> </div> :
//       <div>
//         <h1 className="text-center pt-3 text-secondary h2">Student Login</h1>
//       <form >
//           <div className="form-group">
//         <label className="col-form-label">Email</label>
//         <input type="email" onChange={(e) => setLoginEmail(e.target.value)} />
//         {/* className='form-control' {...register("email", {required:"Email is required",
//       message:"Invalid email address",})}/> */}
//         {/* {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} */}
//           </div>
//           <div className="form-group">
//         <label className="col-form-label">Password</label>
//         <input type="password" onChange={(e) => setLoginPassword(e.target.value)} /> 
//         {/* className='form-control' {...register("phone", {required:"Password is required",
//       message:"Invalid password",})}/> */}
//         {/* {errors.phone && (<small className='text-danger'>{errors.phone.message}</small>)} */}
//           </div>  
//           <div style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}><button onClick={login} className='btn btn-dark submit-btn rounded m-3 px-5'>Login</button></div> 

//           <div className='text-center m-3'>
//           don't have an account? 
//           <a href="/register" class="link">Register</a>
//           </div>
//       </form>
//       </div>
//       }

//     </div>
//   );
// }

// export default Form;



import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useHistory } from "react-router-dom";
import GeneralLayout from '../HOC/GeneralLayout';
import {useForm} from 'react-hook-form';
import { signIn } from '../../SupabaseHelper';


function Form() {

  const { 
     register,
    handleSubmit,
     formState: {errors},
    }=useForm();
   

  const history = useHistory()


  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

 const onSubmit = async (data) => {
  console.log(data);
  const {error} = await signIn({email: data.email, password: data.password})
  error ? seterror(true) : history.push('/student/dashboard')
 }


  return (

    <div className='col-sm-4 shadow rounded g-5'>
    
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Student Login</h1>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className='form-group'>
              <label className="col-form-label">Email</label>
              <input className='form-control' type="email" placeholder='enter email' {...register("email", {required:"Email is required"})} />
       {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}

            </div>
<            div className='form-group'>
              <label className="col-form-label">Password</label>
              <input className='form-control' type="password" placeholder='enter password' {...register("password", {required:"Password is required",})} />
       {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button type='submit' className='btn btn-dark submit-btn rounded m-3 px-5'>
                  {loading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
            <div className='text-center m-3'>
              don't have an account?
              <a href="/register" className="link">Register</a>
            </div>

            </form>

          </div>
        </div>
    </div>

  );
}

export default Form;
//export default GeneralLayout(Form);


{/* <div><h1>{user.email}</h1>
<button onClick={logout}>log out</button>
<a href='/student/login/dashboard'>student</a> */}