import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Studentdashboard/Dashboard.css';
import img1 from '../Studentdashboard/img1.png'
import img2 from '../Studentdashboard/img2.png'
import img3 from '../Studentdashboard/img3.png'
import img4 from '../Studentdashboard/img4.png'
import img5 from '../Studentdashboard/img5.png'
import news from '../Studentdashboard/news.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import CardGroup from 'react-bootstrap/CardGroup';
import Vision from '../../components/Studentscomponents/Vision';

function FacultyDashboard() {
  return (
      <div>

        <Col style={{width:"1000px"}}>
        <CardGroup style={{ marginLeft: "220px", marginTop: "30px" }}>
        <Row xs={1} md={3} className="g-5">
          <Vision/>
          {Array.from({ length: 1 }).map((_, idx) => (

            <Row>
            <Col>
            
            <Link className='decor' to='/faculty/studentdetails'>
                <Card className='cardsp' style={{backgroundColor:"#000",height:"17vh"}}>
                  <Card.Img className='container-fit' variant="top" src={img1}  />
                  <Card.Body >
                    <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>Students</Card.Title>
                  </Card.Body>
                </Card> </Link>

                <Link className='decor' to='/faculty/generatecertificate'>
          <Card className='cardsc' style={{backgroundColor:"#000",height:"17vh"}}>
            <Card.Img className='containers' variant="top" src={img3} />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11.5px',marginBottom:"5px" }}>Certificate</Card.Title>
            </Card.Body>
          </Card>
          </Link>

          </Col>

          <Col>

          <Link className='decor' to='/faculty/resultannounce'>
        <Card className='cardsr' style={{backgroundColor:"#000",height:"17vh"}}>
            <Card.Img className='containers' variant="top" src={img4} />
            <Card.Body>
              <Card.Title style={{ position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px" }}>Results</Card.Title>
            </Card.Body>
          </Card>
        </Link>
            
            
            <Link className='decor' to='faculty/eventreg'>
        <Card className='cardse' style={{backgroundColor:"#000",height:"17vh"}}>
            <Card.Img className='container-fit' variant="top" src={img2} />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'9px',marginBottom:"5px", }}>Registration</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        </Col>
        <Col>
        <Link className='decor' to='/faculty/complaintforms'>
          <Card className='cardsm' style={{backgroundColor:"#000",height:"17vh"}}>
            <Card.Img className='containers' variant="top" src={img5} />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'11px',marginBottom:"5px"}}>Complaints</Card.Title>
            </Card.Body>
          </Card>
          </Link>

          <Link className='decor' to='/faculty/news'>
        <Card className='cardse' style={{backgroundColor:"#000",height:"17vh"}}>
            <Card.Img className='container-fit' variant="top" src={news} />
            <Card.Body>
              <Card.Title style={{position:"relative" ,color: '#fff', textAlign: 'center',fontSize:'9px',marginBottom:"5px", }}>News</Card.Title>
            </Card.Body>
          </Card>
        </Link>

          </Col>

            </Row>

          ))}
          
        </Row>
        </CardGroup>
        </Col>

    </div>



  );
}

export default FacultyLayout(FacultyDashboard);
