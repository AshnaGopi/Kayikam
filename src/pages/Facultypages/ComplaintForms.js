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

 

    

  return (
    <>
    <h1 className="text-center pt-3 text-secondary h2">Complaint Forms</h1>

    <div className='fa'>
    <table className='auto-index'>
      <tr>
        {/* <th style={{paddingLeft:"120px",borderBottom: "1px solid lightskyblue"}}>Name</th> */}
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue"}}>SL no</th>
        <th style={{paddingLeft:"150px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue"}}>Email</th>
        <th style={{borderBottom: "1px solid lightskyblue",paddingLeft:"250px"}}>Complaint</th>
      </tr>
      
          {complaints.map(complaint => (
          // <tr style={{paddingRight:"10px",marginRight:"500px"}}>
          <tr  key={complaint.id}>
            {/* <td>{val.name}</td> */}
            <td style={{position:"flex",marginRight:"80px",paddingLeft:"60px",paddingRight:"50px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}></td>
            <td style={{position:"flex",marginRight:"80px",paddingLeft:"60px",paddingRight:"50px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{complaint.email}</td>
            <td style={{marginRight:"50px",paddingLeft:"80px",borderBottom: "1px solid lightskyblue",fontWeight:"normal"}}>{complaint.complaint}</td>
          {/* </tr> */}
          </tr>
        ))}
    </table> 
    </div >
    
    </>
  );
}

export default FacultyLayout(ComplaintForms);
