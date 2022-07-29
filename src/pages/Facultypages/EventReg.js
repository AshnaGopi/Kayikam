import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function EventReg() {

  const [registrations, setregistrations] = useState([]);
  const [error, seterror] = useState(false);

  async function getRegistrations() {
    const{data} = await supabase.from('student_events').select()
    setregistrations(data)
    console.log(data)
  }

  useEffect(() => {
     getRegistrations()
  }, []);

  return (
    <div>
      <h1 className="text-center pt-3 text-secondary h2">Event Registrations</h1>
    <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Name</th>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Sem</th>
      </tr>
      {registrations.map((registration) => {
        return (
          <tr key={registration.id}>
            <td>{registration.name}</td>
            <td>{registration.semester}</td>
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
      {/* {registration.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.sem}</td>

          </tr>
        )
      })} */}
    </table> 
    </div >
    </div>
  );
}

export default FacultyLayout(EventReg);
