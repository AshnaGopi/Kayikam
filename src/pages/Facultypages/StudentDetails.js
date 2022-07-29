import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import './Faculty.css';

function StudentDetails() {

  const [details, setdetails] = useState([]);
  const [detail, setdetail] = useState({name:"",sem:"",gender:"",ktu_id:"",branch:"",email:""})
  const {name,sem,geder,ktu_id,branch,email} = detail
  async function fetchDetails() {
    const{data} = await supabase.from('student').select()
    setdetails(data)
    console.log(data)
  }
  const [error, seterror] = useState(false);

  useEffect(() => {
     fetchDetails()
  }, []);

 
  return (
    <>
    <h2 className="text-center pt-3 text-secondary h2">Student Details</h2>
    
    <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Name</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Semester</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Gender</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>KTU ID</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Branch</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Email</th>
      </tr>
      {details.map((detail) => {
        return (
          <tr key={detail.id}>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{detail.name}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{detail.semester}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{detail.gender}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{detail.ktu_id}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{detail.branch}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",paddingRight:"30px"}}>{detail.email}</td>
          </tr>
        )
      })}
    </table> 
    </div >
    </>
  );
}

//export default StudentDetails;
export default FacultyLayout(StudentDetails);
