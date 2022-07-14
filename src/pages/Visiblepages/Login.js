import React from 'react';
import Form from '../../components/Visiblecomponents/Form';
import GeneralLayout from '../../components/HOC/GeneralLayout';

function Login() {
  return (
    <div>

<div className='container my-5'>
    <div className='row justify-content-sm-center my-5'>

        <Form />
    </div>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5'>
    </div>
</div>
</div>
  );
}

export default GeneralLayout(Login);
