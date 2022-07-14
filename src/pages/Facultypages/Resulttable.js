import React from 'react';

function Resulttable({list}) {

    
  return (
    <div className='fa'> 
    <table>
      <tr>
        <th>Name</th>
        <th>Sem</th>
        <th>Event</th>
      </tr>
      {list.map((val, key) => {
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

export default Resulttable;
