import React from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

function Result() {

  const [user, setuser] = useState(false);

  const details = [

    { name: "Abcd",sem:"3" },
    { name: "efgh", sem:"5"},
    {name:"jhcxhd",sem:"2"},

  ]
  return (
    <>
    {
      user? <div className='cert' style={{marginTop:"100px"}}>
      <h1 >No Results Available</h1>
    </div> :

    <div>
    <h1 className="text-center pt-3 text-secondary h2">Results Available</h1>
      <h2 style={{marginLeft:"200px",marginTop:"10px"}}>Cricket</h2>
    <div className='fa'>
    <table >
      <tr >
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Position</th>
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Name</th>
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Sem</th>
      </tr>
      {details.map((val, key) => {
        return (
          <tr key={key}>
            <td>{key+1}</td>
            <td>{val.name}</td>
            <td>{val.sem}</td>
          </tr>
        )
      })}
    </table> 
    </div >
      
      
      
    </div>
    }
    
    </>
  );
}

export default StudentLayout(Result);
