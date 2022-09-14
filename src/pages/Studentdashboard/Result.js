import React from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import StudentLayout from '../../components/HOC/StudentLayout';
import { useState } from 'react';

function Result() {

  const [user, setuser] = useState(false);

  const [results, setresults] = useState([]);
  async function fetchResults() {
    const { data } = await supabase.from('result').select(`*,first(*), second(*), third(*)`)
    setresults(data)
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

            
           
            

{results?.map((result) => {
  return(
    <>
    
    <h2 style={{ marginLeft: "200px", marginTop: "10px" }}>{result?.event}</h2>
          
            <div className='fa'>
              <table>
                <tr style={{ padding: "20px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>
                  <th style={{ paddingLeft: "110px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Position</th>
                  <th style={{ paddingLeft: "180px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Name</th>
                  <th style={{ paddingLeft: "110px", borderBottom: "1px solid lightskyblue", borderRight: "1px solid lightskyblue" }}>Sem</th>
                </tr>
                
                    <tbody>
                      <tr key={result?.id}>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>1</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.first?.name}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.first?.semester}</td>

                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>2</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.second?.name}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.second?.semester}</td>
                      </tr>
                      <tr>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>3</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.third?.name}</td>
                        <td style={{ paddingLeft: "30px", borderRight: "1px solid lightskyblue",borderRight:"1px solid lightskyblue",fontWeight:"normal" }}>{result?.third?.semester}</td>
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
