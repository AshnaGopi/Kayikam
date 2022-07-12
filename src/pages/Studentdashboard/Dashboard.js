import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from '../Studentdashboard/img5.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='come'>

      <div className='col-sm-4 shadow rounded g-8'>

        <Row  md={2} className="g-5">
          {Array.from({ length: 1 }).map((_, idx) => (

            <Col>
            <Row>
            
            <Link className='decor' to='/profile'>
                <Card className='card-p'>
                  <Card.Img style={{ height: '70px' }} className='container-fit' variant="top" src={img1} />
                  <Card.Body >
                    <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>My Profile</Card.Title>
                  </Card.Body>
                </Card> </Link>
                <Link className='decor' to='/certificate'>
          <Card className='card-c'>
            <Card.Img className='containers' variant="top" src={img3} />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11.5px',marginBottom:"5px" }}>Certificates</Card.Title>
            </Card.Body>
          </Card>
          </Link>

          <Link className='decor' to='/result'>
        <Card className='card-r'>
            <Card.Img className='containers' variant="top" src={img4} />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px" }}>Results</Card.Title>
            </Card.Body>
          </Card>
        </Link>
            </Row>

            <Row>
            
            <Link className='decor' to='/events'>
        <Card className='card-e'>
            <Card.Img className='container-fit' variant="top" src={img2} />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px" }}>Events</Card.Title>
            </Card.Body>
          </Card>
        </Link>

        <Link className='decor' to='/complaints'>
          <Card className='card-m'>
            <Card.Img className='containers' variant="top" src={img5} />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px"}}>Complaints</Card.Title>
            </Card.Body>
          </Card>
          </Link>
            
            </Row>

         

              
           
      
   
          
    
         


           







            </Col>







          ))}
        </Row>


      </div>

    </div>



  );
}

export default Dashboard;
