import React from 'react';
import Card from 'react-bootstrap/Card';

function Vision() {
  return (
    <Card style={{display:"flex",flexDirection:"column", width: '40rem' ,height:"180px",marginLeft:"30px",marginRight:"485px",}}>
    <Card.Body>
      <Card.Title>Vision</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Physical Education Department</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Vision;