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
import { useHistory } from "react-router-dom"
//import {useForm} from 'react-hook-form';

function Form() {

  // const {formState={errors}}=useForm();

  const history = useHistory()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState("");


  const login = () => {
    setloading(true)
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential) => {
      const user = userCredential.user
      setUser(user)
      // history.push("/student/login/dashboard")
      
    }).catch((err) => {
      const error = err.message
    }
    )
    setloading(false)
  }

  const logout = () => {
    signOut(auth).then(() => setUser(null)).catch((err) => {
      const error = err.message
    }
    )
  }


  return (
    <div className='col-sm-4 shadow rounded g-5'>
      {user ? 
         <div><h1>{user.email}</h1>
          <button onClick={logout}>log out</button>
          <a href='/student/login/dashboard'>student</a>
         </div>
        

         
       :
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Student Login</h1>

          <div>




            <div className='form-group'>
              <label className="col-form-label">Email</label>
              <input className='form-control' type="email" placeholder='enter email' onChange={(e) => setLoginEmail(e.target.value)} />

            </div>
            <div className='form-group'>
              <label className="col-form-label">Password</label>
              <input className='form-control' type="password" placeholder='enter password' onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={login}>
                  {loading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
            <div className='text-center m-3'>
              don't have an account?
              <a href="/register" class="link">Register</a>
            </div>

          </div>
        </div>
      }
    </div>
  );
}

export default Form;

