import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Studentdashboard/Dashboard.css';
// import img1 from '../img1.png'
// import img2 from '../img2.png'
// import img3 from '../img3.png'
// import img4 from '../img4.png'
// import img5 from '../img5.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import StudentLayout from '../../components/HOC/StudentLayout';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function FacultyDashboard() {
  return (
    <div className='come'>

      <div className='col-sm-4 shadow rounded g-8'>

        <Row  md={2} className="g-5">
          {Array.from({ length: 1 }).map((_, idx) => (

            <Col>
            <Row>
            
            <Link className='decor' to='/faculty/studentdetails'>
                <Card className='card-p'>
                  <Card.Img style={{ height: '70px' }} className='container-fit' variant="top"  />
                  <Card.Body >
                    <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>My Profile</Card.Title>
                  </Card.Body>
                </Card> </Link>
                <Link className='decor' to='/faculty/generatecertificate'>
          <Card className='card-c'>
            <Card.Img className='containers' variant="top" />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11.5px',marginBottom:"5px" }}>Certificates</Card.Title>
            </Card.Body>
          </Card>
          </Link>

          <Link className='decor' to='/faculty/resultannounce'>
        <Card className='card-r'>
            <Card.Img className='containers' variant="top"  />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px" }}>Results</Card.Title>
            </Card.Body>
          </Card>
        </Link>
            </Row>

            <Row>
            
            <Link className='decor' to='faculty/eventreg'>
        <Card className='card-e'>
            <Card.Img className='container-fit' variant="top"  />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px" }}>Events</Card.Title>
            </Card.Body>
          </Card>
        </Link>

        <Link className='decor' to='/faculty/complaintforms'>
          <Card className='card-m'>
            <Card.Img className='containers' variant="top"  />
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

export default FacultyLayout(FacultyDashboard);
