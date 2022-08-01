import React from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import StudentLayout from '../../components/HOC/StudentLayout';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function Result() {

  const [error, seterror] = useState(false);
  const [user, setuser] = useState(false);

  const [results, setresults] = useState([]);
  const [result, setresult] = useState({ name1: "", semester1: "" })
  const { nam1, sem1 } = result
  async function fetchResults() {
    const { data } = await supabase.from('result').select()
    setresults(data)
    console.log(data)
  }

  useEffect(() => {
    fetchResults()
  }, []);


  return (

    <>
      {
        user ? <div className='cert' style={{ marginTop: "100px" }}>
          <h1 >No Results Available</h1>
        </div> :

          <div>
            <h1 className="text-center pt-3 text-secondary h2">Results Available</h1>

            
           
            

{results.map((result) => {
  return(
    <>
    
    <h2 style={{ marginLeft: "200px", marginTop: "10px" }}>{result.event}</h2>
          
            <div className='fa'>
              <table>
                <tr style={{ padding: "20px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>
                  <th style={{ paddingLeft: "110px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Position</th>
                  <th style={{ paddingLeft: "230px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Name</th>
                  <th style={{ paddingLeft: "110px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Sem</th>
                </tr>
                
                    <tbody>

                      <tr key={result.id}>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>1</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>Nivedya</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>1</td>

                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>2</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>Ranjisha</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>4</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>3</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>Nandana</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue" }}>6</td>
                      </tr>
                    </tbody>
                 
              </table>
             
            </div >
    </>
            )
          })}
          
          </div>
          
          


      }

    </>

  )
}

export default StudentLayout(Result);
