
import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
//import {useForm} from 'react-hook-form';

function FaForm() {


  const login = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((userCredential) => {
      const user = userCredential.user
      setUser(user)
    }).catch((err) => {
      const error = err.message
    }
    )
  }

  const logout = () => {
    signOut(auth).then(() => setUser(null)).catch((err) => {
      const error = err.message
    }
    )
  }


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  return (
    <div className='col-sm-4 shadow rounded g-5'>
      {user ? <div><h1>{user.email}</h1>

        <button onClick={logout}>log out</button>
      </div> :
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Faculty Login</h1>

          <div>

            {/* <div className='form-group'>
              <label className="col-form-label">Name</label>
              <input className='form-control' type="text" placeholder='enter email' onChange={(e) => setLoginName(e.target.value)} />

            </div> */}

            <div className='form-group'>
              <label className="col-form-label">Email</label>
              <input className='form-control' type="email" placeholder='enter email' onChange={(e) => setLoginEmail(e.target.value)} />

            </div>
            <div className='form-group'>
              <label className="col-form-label">Password</label>
              <input className='form-control' type="password" placeholder='enter password' onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' onClick={login}>Sign In</button>
            </div>
           
          </div>
        </div>
      }
    </div>
  );
}

export default FaForm;


