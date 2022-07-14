import React from 'react';
import GeneralLayout from '../../components/HOC/GeneralLayout';

function AboutUs() {
  return (
    <div className='position-relative'>
      <div className='row justify-content-sm-center '>
      <img src="https://www.gecwyd.ac.in/wp-content/uploads/2020/08/mist-2.png" alt="hello"/>
      
      </div>
     <div className='position-absolute top-0 start-0'>
     <h1>About Us</h1>
     
     </div>
     </div>
  );
}

export default GeneralLayout(AboutUs);
