import React from 'react';
import { supabase } from '../../Supabase';
import { signOut } from '../../SupabaseHelper';
import { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebarfaculty } from './Sidebarfaculty';
import {IconContext} from "react-icons";
import '../Studentscomponents/Navbar.css';
import { useHistory } from "react-router-dom";

function NavB({route}) {

    const [sidebar, setSidebar] = useState(true);  
    const history = useHistory()
    // const router = useRouter()
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false)
    const logout = async () => {
        // signOut(auth).then(() => setUser(null)).catch((err) => {
    
        await signOut({ seterror: seterror, setloading: setloading, history: history })
       
        //   const error = err.message
        // }
        // )
      }
      useEffect(() => {
        const user = supabase.auth.user()
        user == null && route !== 'no-auth' && history.replace('/student/faculty')
      }, [])    

   const showSidebar=() => setSidebar(sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
        <Link to="#" className="menu-bars">
        
        <FaIcons.FaBars onClick={showSidebar}/>      
        </Link>
        <ul className="navbar-nav mx-5">
        <li className="nav-item">
        <Link  style={{color:"#fff",textDecoration:"none"}} onClick={logout}>logout</Link>
        </li>
        </ul>
    </div>
    
    <nav className={sidebar ? 'nav-side active' : 'nav-side'}>
    
        <ul className="nav-menu-item" >
            <li className="navbar-toggle">
                <div to='#' className="menu-bars">
                    KAYIKAM
                </div>
            </li>
            {Sidebarfaculty.map((item,index)=>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default NavB;
