import React from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';

function Certificate() {
  return (
    <div className='cert' style={{marginTop:"100px"}}>
      <h1>No Certificates Available</h1>
    </div>
  );
}

export default StudentLayout(Certificate);
