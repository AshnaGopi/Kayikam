import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';

function Profile() {

  const {user} = useAuthContext()
  const [profile, setprofile] = useState(null);
  const [error, seterror] = useState(false);

  useEffect(() => {
    user && getProfile()
  }, [user]);

  const getProfile = async (data) => {
    const {error } = await supabase
    .from('student')
    .select(`
      student (
        name,
        semester,
        branch,
        ktu_id,
        gender,
        email
      ),
    `)
   
   }


  return (
    <>


      <div className='com'>

        <div className='col-sm-8 shadow rounded g-5' style={{ padding: '30px', }}>
          <h1 className="text-center pt-3 text-secondary h1">My Profile</h1>

          <div className='detail'>
            Name   : {profile.name}
          </div>

          <div className='detail' >

            Semester:{profile.semester}
          </div>

          <div className='detail'>
            Branch  : {profile.branch}
          </div>

          <div className='detail'>
            KTU_ID  :{profile.ktu_id}
          </div>

          <div className='detail'>
            Gender  :{profile.gender}
          </div>
          <div className='detail'>
            Email   :{profile.email}
          </div>
        </div>
      </div>
    </>

  );
}

export default StudentLayout(Profile);
