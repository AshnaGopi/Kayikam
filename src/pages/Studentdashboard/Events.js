
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StudentLayout from '../../components/HOC/StudentLayout';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';
import './Dashboard.css';

function Events() {

  const {user} = useAuthContext()

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false);
  const [events, setevents] = useState(null);

     const {
      register,
       handleSubmit,
       formState:{errors},
     }=useForm()

     useEffect(() => {
       user && getEvents()
     }, [user]);

     const getEvents = async () => {
      const { data, error } = await supabase.from('events').select('name').match({type: user?.user_metadata?.gender, })
      error ? seterror(true) : setevents(data)
     }

    const onSubmit = async (data) => {
      setloading(true)
      data.student = user?.id
      const student_events = await supabase.from('student_events').insert([data])  
      student_events?.error && seterror(true)
      setloading(false)
    }


  return (
    <div className='com'>

      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
        <h1 className="text-center pt-3 text-secondary h2">Event Registration</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className='form-group'>
          <label htmlFor='event_1'>Event 1: </label>
          <select className="form-select" 
             {...register('event_1', {required:"This field is required",})}>
            { events?.map((item)=>
              <option key={item.name} value={item.name}>{item.name}</option>
            )}
          </select>
          {errors.event_1 && (<small className='text-danger'>{errors.event_1.message}</small>)} 

        </div>

        <div className='form-group'>
          <label htmlFor='event_2'>Event 2: </label>
          <select title='Select' className="form-select" 
            {...register('event_2', 
            // {required:"This field is required",}
            )}>
            { events?.map((item)=>
              <option key={item.name} value={item.name}>{item.name}</option>
            )}
          </select>
          {errors.event_2 && (<small className='text-danger'>{errors.event_2.message}</small>)} 

        </div>

        <div className='form-group'>
          <label htmlFor='event_3'>Event 3: </label>
          <select className="form-select" 
            {...register('event_3', 
            // {required:"This field is required",}
            )}>
            { events?.map((item)=>
              <option key={item.name} value={item.name}>{item.name}</option>
            )}
          </select>
          {errors.event_3 && (<small className='text-danger'>{errors.event_3.message}</small>)} 

        </div>

       

        <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
          <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit' >
            {loading ? 'Loading...' : 'Register' }
            </button>
        </div> 
        </form>
      
      </div>
    </div>
  );
}

export default StudentLayout(Events);

