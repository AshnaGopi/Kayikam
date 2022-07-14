import React from 'react';
import StudentLayout from '../../components/HOC/StudentLayout';

function Result() {
  return (
    <div className='cert' style={{marginTop:"100px"}}>
      <h1 >No Results Available</h1>
    </div>
  );
}

export default StudentLayout(Result);
