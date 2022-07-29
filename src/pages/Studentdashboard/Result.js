import React from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import StudentLayout from '../../components/HOC/StudentLayout';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

function Result() {

  const [error, seterror] = useState(false);
  const [user, setuser] = useState(false);

  const [results, setresults] = useState([]);
  const [result, setresult] = useState({name1:"",semester1:""})
  const {nam1,sem1} = result
  async function fetchResults() {
    const{data} = await supabase.from('result').select()
    setresults(data)
    console.log(data)
  }

  useEffect(() => {
     fetchResults()
  }, []);

  
  return (
  
    <>
    {
      user? <div className='cert' style={{marginTop:"100px"}}>
      <h1 >No Results Available</h1>
    </div> :

    <div>
    <h1 className="text-center pt-3 text-secondary h2">Results Available</h1>

      <h2 style={{marginLeft:"200px",marginTop:"10px"}}>{result.event}</h2>
    
    <div className='fa'>
    <table >
      <tr >
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Position</th>
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Name</th>
        <th style={{paddingLeft:"110px",borderBottom: "1px solid lightskyblue"}}>Sem</th>
      </tr>
      {results.map((result) => {
        return (

          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.name1}</td>
            <td>{result.semester1}</td>
          </tr>
          /* <tr>
          <td>{result.id+1}</td>
            <td>{result.name2}</td>
            <td>{result.semester2}</td>
          </tr>
          <tr>
          <td>{result.id+2}</td>
            <td>{result.name3}</td>
            <td>{result.semester3}</td>
          </tr> */

         
          
          
        )})}
    </table> 
    </div >  
    </div>


    }
    
    </>

  )  
}

export default StudentLayout(Result);
