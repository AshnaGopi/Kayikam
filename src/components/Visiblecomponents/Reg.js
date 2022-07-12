// //import React from 'react';
// import {useForm} from 'react-hook-form';
// //import { useHistory } from 'react-router-dom';
// import { createUserWithEmailAndPassword,} from 'firebase/auth';
// import { useState } from 'react';
// import { auth } from '../firebase';

// export default function Reg({formSubc}) {
//   //let history=useHistory()

//     const {
//         register,
//         handleSubmit,
//         formState:{errors},
//         reset,
//       }=useForm();

//       // const onSub=(data) => {
//       //   data.id=Date.now();
//       //   //data.fav=false;
//       //   formSubc(data);
//       //   console.log(data);
//       //  // history.push("/student")

//       // };

//       const signUp = () => {
//         createUserWithEmailAndPassword(auth,name, email, password).then((userCredential) => {
//           const user = userCredential.user
//           setUser(user)
//         }).catch((err) => {
//           const error = err.message
//         })
//       }

//       const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [user, setUser] = useState("");

//   return (
//     <div className='col-sm-4 shadow rounded g-5'>
//     {user ? <div><h1>{user.email}</h1></div> : 
//      <div>
//       <h1 className="text-center pt-3 text-secondary h2">Register</h1>
//     <form >
//       <div className="form-group">
//       <label className="col-form-label">Name</label>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       {/* className='form-control' {...register("name", {required:"Name is required" })}/>
//         {errors.name && (<small className='text-danger'>{errors.name.message}</small>)} */}
//         </div>
//         <div className="form-group">
//       <label className="col-form-label">Email</label>
//       <input type="email" onChange={(e) => setEmail(e.target.value)}/>
//        {/* className='form-control' {...register("email", {required:"Email is required",
//     message:"Invalid email address",})}/>
//       {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} */}
//         </div>
//         <div className="form-group">
//         <label className="col-form-label">Password</label>
//         <input type="password" onChange={(e) => setPassword(e.target.value)} />
//         {/* className='form-control' {...register("password", {required:"Password is required",
//       message:"Invalid password",})}/>
//         {errors.password && (<small className='text-danger'>{errors.password.message}</small>)} */}
//           </div>  
//         {/* <div className="form-group">
//       <label className="col-form-label">Phone</label>
//       <input type="text" className='form-control' {...register("phone", {required:"Phone is required",
//     pattern:{value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
//     message:"Invalid phone no",}})}/>
//       {errors.phone && (<small className='text-danger'>{errors.phone.message}</small>)}
//         </div>    */}
//         <div style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}><button onClick={signUp} className='btn btn-dark submit-btn rounded m-3 px-5'>
//           Register
//           {/* <a href="/student" class='link'>Register</a> */}
//           </button></div> 

//     </form>
//       </div>} 

//   </div>
//   );
//       }


import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase';
import {useForm} from 'react-hook-form';

function Reg() {

       const {
        register,
         handleSubmit,
         formState:{errors},
         reset,
       }=useForm();


  const signUp = (e) => {
    e.preventDefault()
    console.log(email,'s',password);
    createUserWithEmailAndPassword(auth,email, password).then((userCredential) => {
      const user = userCredential.user
      setUser(user)
    }).catch((err) => {
      const error = err.message
    })
  }
 

  const logout = () =>{
    signOut(auth).then(()=>setUser(null)).catch((err) => {
      const error = err.message
    }
    )
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  

  const [user, setUser] = useState("");
  return (
    <div className='col-sm-4 shadow rounded g-5'>
      {user ? <div><h1>{user.email}</h1>

<button onClick={logout}>log out</button>
</div> :
<div>
  <h1 className="text-center pt-3 text-secondary h2">Register</h1>

  <div>

    <form>


  <div className='form-group'>
    <label className="col-form-label">Name</label>
    <input className='form-control' type="text" placeholder='enter name'/>
    
    </div>

    <div className='form-group'>
    <label className="col-form-label">Email</label>
    <input className='form-control' type="email" placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
    
    </div>
    <div className='form-group'>
    <label className="col-form-label">Password</label>
    <input className='form-control' type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
    <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={signUp}>Register</button>
    </div>    
    </form>
  </div>

</div>
}
    </div>
  );
}


export default Reg;

