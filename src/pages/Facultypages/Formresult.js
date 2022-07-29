import React, { useEffect } from 'react';
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
  const [events, setevents] = useState(null);
  const [students, setstudents] = useState(null);

  const {
    register,
     handleSubmit,
     formState:{errors},
   }=useForm()

   const getEvents = async () => {
    const { data, error } = await supabase.from('events').select('name,id')
    const eventsData = data.map((item) => item.name)
    error ? seterror(true) : setevents(eventsData)
   }

   const getStudents = async () => {
      const { data, error } = await supabase.from('student').select('name,id,ktu_id')
      error ? seterror(true) : setstudents(data)
   }
   useEffect(() => {
    if(user){
      getStudents()
      getEvents()
    }
  }, [user]);
   

  const Submit = async (data) =>{
    setloading(true)
    const {error } = await supabase.from('result').insert([data])
    error && seterror(true)
    setloading(false)
  }


  return (
    <div className='com'>


      <div className='col-sm-6 shadow rounded g-5' style={{ padding: '30px', }}>
        <div>
          <h1 className="text-center pt-3 text-secondary h2">Enter Result</h1>

          <form onSubmit={handleSubmit(Submit)}>

            <div className='form-group'>
              <label className="col-form-label">Event</label>
              <select className="form-select" {...register('event', {required:"This field is required",})}>
              { events?.map((item)=>
                <option key={item} value={item}>{item}</option>
                )}
            </select>
              {errors.event && (<small className='text-danger'>{errors.event.message}</small>)}
            </div>

            {/* first */}
            <div className='form-group'>
              <label className="col-form-label">First</label>
              <select className="form-select" {...register('first', {required:"This field is required",})}>
              { students?.map((item)=>
                <option key={item} value={item.id}>{item.ktu_id.toUpperCase()+' - '+item.name}</option>
                )}
            </select>
              {errors.event && (<small className='text-danger'>{errors.event.message}</small>)}
            </div>

            {/* second */}
            <div className='form-group'>
              <label className="col-form-label">Second</label>
              <select className="form-select" {...register('second', {required:"This field is required",})}>
              { students?.map((item)=>
                <option key={item} value={item.id}>{item.ktu_id.toUpperCase()+' - '+item.name}</option>
                )}
            </select>
              {errors.event && (<small className='text-danger'>{errors.event.message}</small>)}
            </div>

            {/* third */}
            <div className='form-group'>
              <label className="col-form-label">Third</label>
              <select className="form-select" {...register('third', {required:"This field is required",})}>
              { students?.map((item)=>
                <option key={item} value={item.id}>{item.ktu_id.toUpperCase()+' - '+item.name}</option>
                )}
            </select>
              {errors.event && (<small className='text-danger'>{errors.event.message}</small>)}
            </div>

         
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit'  >
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}


//export default ResultAnnouncement;
export default Formresult;

