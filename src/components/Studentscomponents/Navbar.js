import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import {IconContext} from "react-icons";
import './Navbar.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(true);      

   const showSidebar=() => setSidebar(sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
        <Link to="#" className="menu-bars">
        
        <FaIcons.FaBars onClick={showSidebar}/>      
        </Link>
    </div>
    
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    
        <ul className="nav-menu-item" >
            <li className="navbar-toggle">
                <div to='#' className="menu-bars">
                    KAYIKAM
                </div>
            </li>
            {Sidebar.map((item,index)=>{
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

export default Navbar;
