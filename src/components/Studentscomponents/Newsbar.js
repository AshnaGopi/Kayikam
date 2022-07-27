import React from 'react';
import Card from 'react-bootstrap/Card';

function Newsbar() {
  return (
    <Card style={{flexDirection:"row-reverse", width: '20rem' ,maxHeight:"fit-content",marginLeft:"350px"}}>
      <Card.Body >
        <Card.Title>News</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Physical Education Department</Card.Subtitle>
        <Card.Text style={{position:"relative"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Newsbar;
