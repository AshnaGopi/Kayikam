import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function EventReg() {

  const details = [

    { name: "Abcd", sem: "1",},
    { name: "efgh", sem: "3", },
    { name: "efgh", sem: "3", },
    { name: "Abcd", sem: "1",},
    { name: "efgh", sem: "3",  },
    { name: "efgh", sem: "3",   },
    { name: "Abcd", sem: "1",  },
    { name: "efgh", sem: "3", },
    { name: "Abcd", sem: "1", },
    { name: "efgh", sem: "3",},
    { name: "efgh", sem: "3",},
    { name: "efgh", sem: "3",}


  ]

  return (
    <div>
      <h1 className="text-center pt-3 text-secondary h2">Event Registrations</h1>
      <h2 style={{marginLeft:"200px",marginTop:"10px"}}>Cricket</h2>
    <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Name</th>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Sem</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.sem}</td>
          </tr>
        )
      })}
    </table> 
    </div >

    <h2 style={{marginLeft:"200px",marginTop:"10px"}}>Cricket</h2>
    <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Name</th>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Sem</th>

      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.sem}</td>

          </tr>
        )
      })}
    </table> 
    </div >
    </div>
  );
}

export default FacultyLayout(EventReg);
