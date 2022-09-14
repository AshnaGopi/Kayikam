import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import FacultyLayout from "../components/HOC/FacultyLayout";
import cert from './cert.png' ;
//import './Cert.css';

class Lastcert extends Component {
  // function App() {
  certificateWrapper = React.createRef();
//  const [show, setshow] = useState(false);
  state = {
    Name: "",
    event:""
  };
 
    render() {
    return (
      <div className="App">
       <Row>



        <div className="Meta" style={{marginLeft:"300px"}}>
          <h1>GECW Sports Certificates</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
           <p>Please enter event.</p>
          <input
            type="text"
            placeholder="Please enter event..."
            value={this.state.event}
            onChange={(e) => {
              this.setState({ event: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              // setshow();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Generate
          </button>
        </div>

        <div style={{marginLeft:"300px"}} id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <h1>{this.state.event}</h1>
            <img  src={cert} alt="Certificate" />
          </div>
          
        </div>
       </Row>
      </div>
     
    );
  }
}


export default FacultyLayout(Lastcert);
