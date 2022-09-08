import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function EventReg() {

  const [registrations, setregistrations] = useState([]);
  const [regis, setregis] = useState([]);
  const [error, seterror] = useState(false);

  async function getRegistrations() {
    const{data} = await supabase.from('student_events').select()
    setregistrations(data)
    console.log(data)
    // const{datas} = await supabase.from('events').select()
    // setregis(datas)
  }

  useEffect(() => {
     getRegistrations()
  }, []);

  // {regis.map((regis) => {
  return (
    <div>
      <h1 className="text-center pt-3 text-secondary h2">Event Registrations</h1>
      <h2 style={{marginLeft:"200px",marginTop:"10px"}}>xcfggtrd</h2>
    <div className='fa'>
    <table className='auto-index'>
      <tr>
      <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>SL No</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Name</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Sem</th>
      </tr>
      {registrations.map((registrations) => {
        return (
          <tr>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}></td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{registrations.student}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>1</td>
          </tr>
        )
       })} 
    </table> 
    </div >

    {/* <h2 style={{marginLeft:"200px",marginTop:"10px"}}>Cricket</h2> */}
    {/* <div className='fa'>
    <table>
      <tr>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>Nandana</th>
        <th style={{paddingLeft:"210px",borderBottom: "1px solid lightskyblue",paddingBottom:"10px"}}>5</th>

      </tr> */}
      {/* {registration.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.sem}</td>

          </tr>
        )
      })} */}
    {/* </table> 
    </div > */}
    </div>
  );
// })}
}

export default FacultyLayout(EventReg);
