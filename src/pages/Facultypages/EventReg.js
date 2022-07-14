import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function EventReg() {

  const details = [

    { name: "Abcd", sem: "1", event: "Lemon spoon" },
    { name: "efgh", sem: "3", event: "Basketball" }

  ]

  return (
    <div className='fa'>
    <table>
      <tr>
        <th>Name</th>
        <th>Sem</th>
        <th>Event</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.sem}</td>
            <td>{val.event}</td>
          </tr>
        )
      })}
    </table> 
    </div >
  );
}

export default FacultyLayout(EventReg);
