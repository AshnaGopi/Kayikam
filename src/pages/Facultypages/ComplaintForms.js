import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';


function ComplaintForms() {


  // const {user} = useAuthContext()
  const [complaints, setcomplaints] = useState([]);
  const [complaint, setcomplaint] = useState({email:"",complaintt:""})
  const {email,complaintt} = complaint
  async function fetchComplaints() {
    const{data} = await supabase.from('complaints').select()
    setcomplaints(data)
    console.log(data)
  }
  const [error, seterror] = useState(false);

  useEffect(() => {
     fetchComplaints()
  }, []);

  // const getComplaints = async () => {
  //   const {data,error } = await supabase
  //   .from('complaints')
  //   .select(`
  //       email,
  //     complaint
  //   `)
  //   const complaintData = data.map((item) => item.name)
  //     error ? seterror(true) : setcomplaint(complaintData)
  //   // error ? seterror(true) : setevents(eventsData)
  //  }

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
    <table >
      <tr>
        {/* <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Name</th> */}
        <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Email</th>
        <th style={{borderBottom: "1px solid lightskyblue",paddingLeft:"350px"}}>Complaint</th>
      </tr>
      
          {complaints.map(complaint => (
          // <tr style={{paddingRight:"10px",marginRight:"500px"}}>
          <tr  key={complaint.id}>
            {/* <td>{val.name}</td> */}
            <td style={{position:"flex",marginRight:"50px",paddingLeft:"100px",paddingRight:"50px"}}>{complaint.email}</td>
            <td style={{marginRight:"50px",paddingLeft:"200px"}}>{complaint.complaint}</td>
          {/* </tr> */}
          </tr>
        ))}
    </table> 
    </div >
    
    </>
  );
}

export default FacultyLayout(ComplaintForms);
