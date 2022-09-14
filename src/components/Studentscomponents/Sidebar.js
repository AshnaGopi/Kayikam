import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Sidebar=[
    {
        title: 'Home',
        path:"/student/dashboard",
        icon: <AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title: 'Profile',
        path:"/student/profile",
        icon: <AiIcons.AiOutlineUser/>,
        cName:"nav-text"
    },
    {
        title: 'Events',
        path:"/student/events",
        icon: <AiIcons.AiOutlineThunderbolt/>,
        cName:"nav-text"
    },
    // {
    //     title: 'Certificate',
    //     path:"/student/certificate",
    //     icon: <AiIcons.AiOutlineBook/>,
    //     cName:"nav-text"
    // },
    {
        title: 'Results',
        path:"/student/result",
        icon: <AiIcons.AiOutlineTrophy/>,
        cName:"nav-text"
    },
    {
        title: 'Complaints',
        path:"/student/complaints",
        icon: <AiIcons.AiFillInfoCircle/>,
        cName:"nav-text"
    }
    

]

