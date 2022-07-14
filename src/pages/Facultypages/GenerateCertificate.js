import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';

function GenerateCertificate() {
  return (
    <div>
      Generate Certificate
    </div>
  );
}

//export default GenerateCertificate;
 export default FacultyLayout(GenerateCertificate);
