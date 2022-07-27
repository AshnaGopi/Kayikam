import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import TableData from './Tabledata';

function ResultAnnouncement() {
  return (
    <div>
   <TableData/>
    </div>
  );
}

export default FacultyLayout(ResultAnnouncement);

