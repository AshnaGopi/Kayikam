import React, { useState } from 'react';
import ResultAnnouncement from './ResultAnnouncement';
import jsonData from './data.json';
import './Faculty.css';
import Formresult from './Formresult';


function TableData() {
const [studentData, setStudentData] = useState(jsonData);

const tableRows = studentData.map((info) => {
	return (
	<>
	<tr>
		<td>1</td>
		<td>{info.nam1}</td>
		<td>{info.sem1}</td>
		
	</tr>
	<tr>
		<td>2</td>
		<td>{info.nam2}</td>
		<td>{info.sem2}</td>
	</tr>
	<tr>
		<td>3</td>
		<td>{info.nam3}</td>
		<td>{info.sem3}</td>
	</tr>


	</>
		
	

	
	);
});

const addRows = (data) => {
	const totalStudents = studentData.length;
	data.id = totalStudents + 1;
	const updatedStudentData = [...studentData];
	updatedStudentData.push(data);
	setStudentData(updatedStudentData);
};

return (
	<>
		<Formresult func={addRows} />
	<div className='retab'>
	
	<table >
		<thead>
		<tr>
			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Sr.NO</th>
			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Name</th>
			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Semester</th>
			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Certificate</th>
			
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	
	</div>

	</>

);
}

export default TableData;

