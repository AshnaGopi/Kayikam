import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import './Faculty.css';

function StudentDetails() {

  const details = [

    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"},
    { name: "Abcd", sem: "12", gender: "female", regno:"whdjsf",branch:"CSE",email:"hrwihzeu44rawhj"}
  ]
  return (
    <>
    <h2 className="text-center pt-3 text-secondary h2">Student Details</h2>
    
    <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Name</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Semester</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Gender</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Register no</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Branch</th>
        <th style={{paddingLeft:"50px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Email</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{val.name}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{val.sem}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{val.gender}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{val.regno}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px"}}>{val.branch}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",paddingRight:"30px"}}>{val.email}</td>
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
