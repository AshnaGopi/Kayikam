import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Sidebarfaculty=[
    {
        title: 'Home',
        path:"/faculty/facultydashboard",
        icon: <AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title: 'Students Details',
        path:"/faculty/studentdetails",
        icon: <AiIcons.AiOutlineUser/>,
        cName:"nav-text"
    },
    {
        title: 'Event Registrations',
        path:"/faculty/eventreg",
        icon: <AiIcons.AiOutlineThunderbolt/>,
        cName:"nav-text"
    },
    {
        title: 'Generate Certificate',
        path:"/faculty/generatecertificate",
        icon: <AiIcons.AiOutlineBook/>,
        cName:"nav-text"
    },
    {
        title: 'Result Announcement',
        path:"/faculty/resultannounce",
        icon: <AiIcons.AiOutlineTrophy/>,
        cName:"nav-text"
    },
    {
        title: 'Complaint forms',
        path:"/faculty/complaintforms",
        icon: <AiIcons.AiFillInfoCircle/>,
        cName:"nav-text"
    }
    

]

