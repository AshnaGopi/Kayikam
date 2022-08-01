import React from 'react';
import Card from 'react-bootstrap/Card';

function Vision() {
  return (
    <Card style={{display:"flex",flexDirection:"column", width: '40rem' ,height:"180px",marginLeft:"30px",marginRight:"485px",}}>
    <Card.Body>
      <Card.Title>Vision</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Physical Education Department</Card.Subtitle>
      <Card.Text>
        Be a centre of excellence in physical education to mould empowered aand physically fit 
        engineers for the upliftment of the society.

      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Vision;
