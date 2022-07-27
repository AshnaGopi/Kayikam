import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Sidebarfaculty=[
    {
        title: 'Home',
        path:"/faculty/facultydashboard",
        icon: <AiIcons.AiFillHome/>,
        cName:"nav-text-size"
    },
    {
        title: 'Students Details',
        path:"/faculty/studentdetails",
        icon: <AiIcons.AiOutlineUser/>,
        cName:"nav-text-size"
    },
    {
        title: 'Event Registrations',
        path:"/faculty/eventreg",
        icon: <AiIcons.AiOutlineThunderbolt/>,
        cName:"nav-text-size"
    },
    {
        title: 'Generate Certificate',
        path:"/faculty/generatecertificate",
        icon: <AiIcons.AiOutlineBook/>,
        cName:"nav-text-size"
    },
    {
        title: 'Result Announcement',
        path:"/faculty/resultannounce",
        icon: <AiIcons.AiOutlineTrophy/>,
        cName:"nav-text-size"
    },
    {
        title: 'News',
        path:"/faculty/news",
        icon: <AiIcons.AiFillInfoCircle/>,
        cName:"nav-text-size"
    },
    {
        title: 'Complaint forms',
        path:"/faculty/complaintforms",
        icon: <AiIcons.AiFillInfoCircle/>,
        cName:"nav-text-size"
    }
    

]

