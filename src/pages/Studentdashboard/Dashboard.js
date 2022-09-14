import React from 'react';
import { supabase } from '../../Supabase';
import { signOut } from '../../SupabaseHelper';
import { useEffect, useState } from 'react'
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
import StudentLayout from '../../components/HOC/StudentLayout';
import CardGroup from 'react-bootstrap/CardGroup';
import Vision from '../../components/Studentscomponents/Vision';
import Newsbar from '../../components/Studentscomponents/Newsbar';
// import { signOut } from '../../SupabaseHelper';
import { useRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useAuthContext } from '../../store/Context';


function Dashboard({children,route}) {
  // const { signOut } = useAuthContext()
  const history = useHistory()
  // const router = useRouter()
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)




  return (
    <div >

        <Col style={{ width: "1000px" }}>

          <CardGroup style={{ marginLeft: "220px", marginTop: "30px" }}>
            <Row xs={1} md={3} className="g-5" >

              <Vision />

              {Array.from({ length: 1 }).map((_, idx) => (
                <Row style={{ width: "400px" }}>

                  <Col>

                    <Link className='decor' to='/student/profile'>
                      <Card className='cards-p' style={{ backgroundColor: "#000", height: "17vh" }}>
                        <Card.Img style={{ height: '70px' }} className='container-fit' variant="top" src={img1} />
                        <Card.Body >
                          <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>My Profile</Card.Title>
                        </Card.Body>
                      </Card> </Link>

                      <Link className='decor' to='/student/complaints'>
                      <Card className='cards-m' style={{ backgroundColor: "#000", height: "17vh" }}>
                        <Card.Img className='containers' variant="top" src={img5} />
                        <Card.Body>
                          <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>Complaints</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>

                    

                  </Col>

                  <Col>

                    <Link className='decor' to='/student/result'>
                      <Card className='cards-r' style={{ backgroundColor: "#000", height: "17vh" }}>
                        <Card.Img className='containers' variant="top" src={img4} />
                        <Card.Body>
                          <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>Results</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>

                    <Link className='decor' to='/student/events'>
                      <Card className='cards-e' style={{ backgroundColor: "#000", height: "17vh" }}>
                        <Card.Img className='container-fit' variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '11px', marginBottom: "5px" }}>Events</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>

                  </Col>

                  <Col>

                    {/* <Link className='decor' to='/student/certificate'>
                      <Card className='cards-c' style={{ backgroundColor: "#000", height: "17vh" }}>
                        <Card.Img className='containers' variant="top" src={img3} />
                        <Card.Body >

                          <Card.Title style={{ position: "relative", color: '#fff', textAlign: 'center', fontSize: '10px', marginBottom: "5px" }}>Certificates</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link> */}

                  </Col>

                </Row>
              ))}
              <Newsbar />
            </Row>

          </CardGroup>

        </Col>
    </div>


  );
}

export default StudentLayout(Dashboard);
