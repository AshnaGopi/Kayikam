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
                  <th style={{ paddingLeft: "180px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Name</th>
                  <th style={{ paddingLeft: "110px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Sem</th>
                </tr>
                
                    <tbody>

                      <tr key={result.id}>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>1</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.first}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.sem1}</td>

                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>2</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.second}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.sem2}</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>3</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.third}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result.sem3}</td>
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
