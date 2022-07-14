import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import './Faculty.css';

function StudentDetails() {

  const details = [

    { name: "Abcd", age: "12", gender: "female" },
    { name: "efgh", age: "13", gender: "male" }

  ]

  return (
    <div className='fa'>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.gender}</td>
          </tr>
        )
      })}
    </table> 
    </div >
  );
}

//export default StudentDetails;
export default FacultyLayout(StudentDetails);
