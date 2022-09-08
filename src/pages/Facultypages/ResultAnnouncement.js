import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import Formresult from './Formresult';
import TableData from './Tabledata';

function ResultAnnouncement() {
  return (
    <div>
      <Formresult/>
   {/* <TableData/> */}
    </div>
  );
}

export default FacultyLayout(ResultAnnouncement);

