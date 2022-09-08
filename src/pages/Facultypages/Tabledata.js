// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { supabase } from '../../Supabase';
// import ResultAnnouncement from './ResultAnnouncement';

// import './Faculty.css';
// import Formresult from './Formresult';


// function TableData() {
// const [studentData, setStudentData] = useState("");


// const [error, seterror] = useState(false);
// const [user, setuser] = useState(false);

// const [results, setresults] = useState([]);
// const [result, setresult] = useState({ name1: "", semester1: "" })
// const { nam1, sem1 } = result
// async function fetchResults() {
//   const { data } = await supabase.from('result').select()
//   setresults(data)
//   console.log(data)
// }

// useEffect(() => {
//   fetchResults()
// }, []);


// return(
// 	<>
// <Formresult/>
// {results.map((result) => {
// return (
// 	<div className='faa'>
	
// 	<h2 style={{ marginLeft: "100px", marginTop: "10px" }}>{result.event}</h2>

// 	<div className='retab'>
	
// 	<table >
// 		<thead>
// 		<tr>
// 			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Sr.NO</th>
// 			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Name</th>
// 			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>Semester</th>
// 			<th style={{paddingLeft:"80px",paddingBottom:"10px",borderBottom: "1px solid lightskyblue"}}>KTU_ID</th>
			
// 		</tr>
// 		</thead>
// 		<tbody>

// 		<tr>
// 		<td>1</td>
// 		<td>{result.first}</td>
// 		<td>{result.sem1}</td>
// 		<td>{result.ktu1}</td>
		
// 	</tr>
// 	<tr>
// 		<td>2</td>
// 		<td>{result.second}</td>
// 		<td>{result.sem2}</td>
// 		<td>{result.ktu2}</td>
// 	</tr>
// 	<tr>
// 		<td>3</td>
// 		<td>{result.third}</td>
// 		<td>{result.sem3}</td>
// 		<td>{result.ktu3}</td>
// 	</tr>

// 		</tbody>
// 	</table>
	
// 	</div>
// 	</div>


	

// );
// })}
	
// 	</>
// );
// }

// export default TableData;

