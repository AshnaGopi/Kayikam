import React from 'react';
import { useState } from 'react';
import FacultyLayout from '../../components/HOC/FacultyLayout';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../store/Context';
import { supabase } from '../../Supabase';

function News() {

    const {user} = useAuthContext()

  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false);
  const [complaint, setcomplaint] = useState(null);

    const {
        register,
         handleSubmit,
         formState:{errors},
       }=useForm()

       const postData = async(data) =>{
        console.log(data);
        const {error } = await supabase.from('news').insert([
          {date:data.date,news:data.news  }
        ])
       
      }
    return (
        <div className='com'>

            <div className='col-sm-8 shadow rounded g-5' style={{ padding: '30px', }}>
                <h1 className="text-center pt-3 text-secondary h2">NEWS</h1>

                <form onSubmit={handleSubmit(postData)}>


                    <div className='form-group'>
                        <label className="col-form-label">Date</label>
                        <input className='form-control' type="date" placeholder='enter date' {...register("date", { required: "This field is required" })} />
                        {errors.date && (<small className='text-danger'>{errors.date.message}</small>)}

                    </div>

                    <div className='form-group'>
                        <label className="col-form-label">News</label>
                        <textarea rows={5} className='form-control' type="textarea" placeholder='write down news' {...register("news", { required: "This field is required" })} />
                        {errors.news && (<small className='text-danger'>{errors.news.message}</small>)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <button className='btn btn-dark submit-btn rounded m-3 px-5' type='submit' >{loading ? 'Loading...' : 'Add News'}</button>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default FacultyLayout(News);
