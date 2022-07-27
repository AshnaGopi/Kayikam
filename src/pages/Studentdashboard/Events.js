
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
      const { data, error } = await supabase.from('events').select()
      const eventsData = data.map((item) => item.name)
      error ? seterror(true) : setevents(eventsData)
     }

     const onSubmit = async (data) => {
      console.log(data);
     }


  return (
    <div className='com'>

      <div className='col-sm-8 shadow rounded g-5' style={{padding:'30px',}}>
        <h1 className="text-center pt-3 text-secondary h2">Event Registration</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className='form-group'>
          <h6>Gender</h6>
          {
            events?.map((item, index)=> 
            <div className='form-check'>
              <input className='form-check-input' type="checkbox" value={item.name} 
                {...register(`events-${index+1}`, {required:"This field is required",})}/>
              <label className="form-check-label">{item}</label>
            </div>
            )
          }
          
          
          {errors.name && (<small className='text-danger'>{errors.name.message}</small>)} 
        </div>
        </form>

        <div style={{display: "flex",justifyContent: "center", alignItems: "center" }} >
          <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit' >
            {loading ? 'Loading...' : 'Register' }
            </button>
        </div> 

      
      </div>
    </div>
  );
}

export default StudentLayout(Events);

