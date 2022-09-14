import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function EventReg() {

  const [registrations, setregistrations] = useState([]);

  async function getRegistrations() {
    const{data} = await supabase.from('student_events').select(`*, student(*)`)
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
    <div className='fa'>
    <table className='auto-index'>
      <thead>

      <tr>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>SL No</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Name</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Sem</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Event 1</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Event 2</th>
        <th style={{paddingLeft:"150px",borderBottom: "2px solid lightskyblue",paddingBottom:"10px",borderRight:"1px solid lightskyblue"}}>Event 3</th>
      </tr>
      </thead>
      <tbody>

      {registrations?.map((registrations, index) => 
          <tr key={registrations?.id}>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>
              
              </td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>
              {registrations?.student?.name}
              </td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{registrations?.student?.semester}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{registrations?.event_1}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{registrations?.event_2}</td>
            <td style={{paddingLeft:"30px",marginRight:"30px",borderBottom: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal"}}>{registrations?.event_3}</td>
          </tr>
        
        )} 
        </tbody>
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
