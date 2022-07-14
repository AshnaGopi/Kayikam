import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function ComplaintForms() {


  const details = [

    { name: "Abcd", email: "abcd@agh.dygdh", complaint: "No proper gym equipment" },
    { name: "efgh", email: "dvf@sdvs.com", complaint: "No yoga practice" }

  ]

  return (
    <div className='fa'>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Complaint</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.complaint}</td>
          </tr>
        )
      })}
    </table> 
    </div >
  );
}

export default FacultyLayout(ComplaintForms);
