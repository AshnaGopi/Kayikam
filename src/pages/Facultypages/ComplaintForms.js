import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';


function ComplaintForms() {


  const {user} = useAuthContext()
  const [complaint, setcomplaint] = useState(null);
  const [error, seterror] = useState(false);

  useEffect(() => {
    user && getComplaints()
  }, [user]);

  const getComplaints = async () => {
    const {data,error } = await supabase
    .from('complaints')
    .select(`
        email,
      complaint
    `)
    const complaintData = data.map((item) => item.name)
      error ? seterror(true) : setcomplaint(complaintData)
    // error ? seterror(true) : setevents(eventsData)
   }

  // export const details= async(data) =>[
  //   {

  //  const {error } = await supabase
  //   .from('complaints')
  //   .select(`
  //     student (
  //       email
  //     ),
  //     complaint
  //   `)
  //     }
  // ]

 

    

  return (
    <>
    <h1 className="text-center pt-3 text-secondary h2">Complaint Forms</h1>
    <div className='fa'>
    <table>
      <tr>
        {/* <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Name</th> */}
        <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Email</th>
        <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Complaint</th>
      </tr>
      {complaint.map((val, key) => {
        return (
          <tr key={key}>
            {/* <td>{val.name}</td> */}
            <td>{val.email}</td>
            <td>{val.complaint}</td>
          </tr>
        )
      })}
    </table> 
    </div >
    </>
  );
}

export default FacultyLayout(ComplaintForms);
