import React from 'react';
import GeneralLayout from '../../components/HOC/GeneralLayout';

function Home() {

    return (
        <div>
                <div className='container-fit position-absolute'>
                    <div className='row justify-content-sm-center'> 
                        <img src="https://www.gecwyd.ac.in/wp-content/uploads/2020/08/mist-2.png" alt="hello" />
                    </div>

                </div>
                


                <div style={{paddingTop:"20px"}} className='container col-sm-4 bg-white rounded justify-content-center position-relative'>
                    <div className='container justify-content-center col-sm-8 px-5 m-10'>
                        <h1 className='text-center pt-3  h2'>KAYIKAM</h1>
                        <p className='text-center '>PHYSICAL EDUCATION DEPARTMENT</p>
                        <p className='text-center '>Government Engineering College Wayanad</p>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}><button className='btn btn-dark submit-btn rounded m-3 px-5'><a href="/student/login" class="link" style={{ color: 'white', textDecoration: 'none' }}>Login for Student</a></button></div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}><button className='btn btn-dark submit-btn rounded m-3 px-5'><a href="/faculty/login" class="link" style={{ color: 'white', textDecoration: 'none' }}>Login for Faculty</a></button></div>
                    {/* <a href='/faculty/facultydashboard' class='link'>Faculty</a>
                    <a href='/student/dashboard' class='link'>Student</a>
                    <a href='/student/certificate'>Certificate</a> */}
                </div>
        </div>
    );
}



//export default Home;

export default GeneralLayout(Home);
