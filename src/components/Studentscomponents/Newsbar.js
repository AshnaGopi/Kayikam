import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '../../Supabase';
import Card from 'react-bootstrap/Card';

function Newsbar() {

  const [updates, setupdates] = useState([]);
  const [update, setupdate] = useState({date:"",news:""})
  const {date,news} = update
  async function fetchNews() {
    const{data} = await supabase.from('news').select()
    setupdates(data)
    console.log(data)
  }
  const [error, seterror] = useState(false);

  useEffect(() => {
     fetchNews()
  }, []);
  return (
    <Card style={{flexDirection:"row-reverse" ,maxHeight:"250px",marginLeft:"300px",marginBottom:"10px",overflowY:"auto"}}>
      <Card.Body >
        <Card.Title>News</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Physical Education Department</Card.Subtitle>
        <Card.Text style={{position:"relative",maxWidth:"fit-content",display:"flex",flexDirection:"column-reverse"}}>
         { updates.map((update)=>(
            <div key={update.id}>
              <h9 style={{color:"blue",}}>{update.date}</h9>
              <p style={{color:"black",}}>{update.news}</p>
            </div>
          ))
         }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Newsbar;
