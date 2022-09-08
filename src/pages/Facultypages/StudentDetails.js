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
    <table className='auto-index'>
      <tr>
      <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>SL no</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Name</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Semester</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Gender</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>KTU ID</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Branch</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Email</th>
      </tr>
      {details.map((detail) => {
        return (
          <tr key={detail.semester}>
             <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}></td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.name}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.semester}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.gender}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.ktu_id}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.branch}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",paddingRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{detail.email}</td>
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
