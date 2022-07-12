import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Sidebar=[
    {
        title: 'Home',
        path:"/student/login/dashboard",
        icon: <AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title: 'Profile',
        path:"/profile",
        icon: <AiIcons.AiOutlineUser/>,
        cName:"nav-text"
    },
    {
        title: 'Events',
        path:"/events",
        icon: <AiIcons.AiOutlineThunderbolt/>,
        cName:"nav-text"
    },
    {
        title: 'Certificate',
        path:"/certificate",
        icon: <AiIcons.AiOutlineBook/>,
        cName:"nav-text"
    },
    {
        title: 'Results',
        path:"/result",
        icon: <AiIcons.AiOutlineTrophy/>,
        cName:"nav-text"
    },
    {
        title: 'Complaints',
        path:"/complaints",
        icon: <AiIcons.AiFillInfoCircle/>,
        cName:"nav-text"
    }
    

]

