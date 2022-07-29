import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';

function Profile() {

  const {user} = useAuthContext()

  // async function fetchDetails() {
  //   const{data} = await supabase.from('student').select()
  //   setdetails(data)
  //   console.log(data)
  // }
  // const [error, seterror] = useState(false);

  // useEffect(() => {
  //    fetchDetails()
  // }, []);


  return (
    <>


      <div className='com'>

        <div className='col-sm-8 shadow rounded g-5' style={{ padding: '30px', }}>
          <h1 className="text-center pt-3 text-secondary h1">My Profile</h1>

              <div className='detail'>
            Name   : {user?.user_metadata.name}
          </div>

          <div className='detail'>

            Semester:{user?.user_metadata.semester}
          </div>

          <div className='detail'>
            Branch  : {user?.user_metadata.branch}
          </div>

          <div className='detail'>
            KTU_ID  :{user?.user_metadata.ktu_id}
          </div>

          <div className='detail'>
            Gender  :{user?.user_metadata.gender}
          </div>
          <div className='detail'>
            Email   :{user?.user_metadata.email}
          </div>

          
        </div>
      </div>
    </>

  );
}

export default StudentLayout(Profile);
