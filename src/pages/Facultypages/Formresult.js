import React from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row } from 'react-bootstrap';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';



function Formresult(props) {

  const {user} = useAuthContext()

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false);
  const [nam1, setnam1] = useState("");
  const [nam2, setnam2] = useState("");
  const [nam3, setnam3] = useState("");
  const [eve, seteve] = useState(null);
  const [sem1, setsem1] = useState("");
  const [sem2, setsem2] = useState("");
  const [sem3, setsem3] = useState("");

  const {
    register,
     handleSubmit,
     formState:{errors},
   }=useForm()

   

  const Submit = async(data) =>{
    console.log(data);
    const {error } = await supabase.from('result').insert([
      {event:data.eve,name1:data.nam1,semester1:data.sem1,name2:data.nam2,semester2:data.sem2,name3:data.nam3,semester3:data.sem3 }
    ])
   
  }



  
  // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

	// const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsSelected(true);
	// };

	// const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	formData.append('File', selectedFile);

	// 	fetch(
	// 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };

  
  // const Submit = (item) => {
  //   item.preventDefault();
  //   const details = {
  //     nam1: '',
  //     nam2:'',
  //     nam3:'',
  //     sem1: '',
  //     sem2: '',
  //     sem3: '',
  //     eve: '',
  //   };
  //   props.func(details);
  //   clearState();
  // };

  // const clearState = () => {
  //   setnam1('');
  //   setnam2('');
  //   setnam3('');
  //   setsem1('');
  //   setsem2('');
  //   setsem3('');
  //   seteve('');
  // };
  return (
    <div className='com'>


      <div className='col-sm-6 shadow rounded g-5' style={{ padding: '30px', }}>
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Enter Result</h1>

          <form onSubmit={handleSubmit(Submit)}>

            <div className='form-group'>
              <label className="col-form-label">Event</label>
              <select className='form-select' value={eve} {...register("eve", {required:"This field is required"})} >
              {errors.event && (<small className='text-danger'>{errors.event.message}</small>)}
                <option value="select">Select</option>
                <option value="1">Cricket</option>
                <option value="2">Football</option>
                <option value="3">Hockey</option>
                <option value="4">Golf</option>
                <option value="5">Basketball</option>
                <option value="6">Tennis</option>
                <option value="7">Badminton</option>
                <option value="8">Volleyball</option>
              </select>

            </div>

            <div className='form-group row g-2'>
              <div className='col-8'>
            <label className="col-form-label" >1st Name</label>
              <input className='form-control' type="text" placeholder='Enter name' {...register("nam1", {required:"This field is required"})} />
              {errors.nam1 && (<small className='text-danger'>{errors.nam1.message}</small>)}
              </div>
              <div className='col-3'>
              <label className="col-form-label" >Sem</label>
              <select className='form-select' type="text"  placeholder='' {...register("sem1", {required:"This field is required"})}>
              {errors.sem1 && (<small className='text-danger'>{errors.sem1.message}</small>)}
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>

            <div className='form-group row g-2'>
              <div className='col-8'>
            <label className="col-form-label">2nd Name</label>
              <input className='form-control' type="text" placeholder='Enter name' {...register("nam2", {required:"This field is required"})} />
              {errors.nam2 && (<small className='text-danger'>{errors.nam2.message}</small>)}
              </div>
              <div className='col-3'>
              <label className="col-form-label">Sem</label>
              <select className='form-select' type="text" placeholder='' {...register("sem2", {required:"This field is required"})}>
              {errors.sem2 && (<small className='text-danger'>{errors.sem2.message}</small>)}
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>

            <div className='form-group row g-2'>
              <div className='col-8'>
            <label className="col-form-label">3rd Name</label>
              <input className='form-control' type="text"  placeholder='Enter name' {...register("nam3", {required:"This field is required"})} />
              {errors.nam3 && (<small className='text-danger'>{errors.nam3.message}</small>)}
              </div>
              <div className='col-3'>
              <label className="col-form-label">Sem</label>
              <select className='form-select' type="text"  placeholder='' {...register("sem3", {required:"This field is required"})}>
              {errors.sem3 && (<small className='text-danger'>{errors.sem3.message}</small>)}
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>
            
           
            
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit'  >Submit</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}


//export default ResultAnnouncement;
export default Formresult;

