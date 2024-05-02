import React from 'react'
import * as LiaIcon from "react-icons/lia"
import * as Io5Icon from "react-icons/io5"
import * as PiIcon  from "react-icons/pi"
import * as LiIcon from "react-icons/lu"
import * as SlIcon from "react-icons/sl"
import * as FaIcon  from "react-icons/fa"
import * as MdIcon from "react-icons/md"
import * as TfiIcon from "react-icons/tfi"
import * as IoCIcon  from "react-icons/io5"
import * as TfIcon  from "react-icons/tfi";

export const SideBarData = [
{
        title: 'Dashboard'
},
{
        title: 'Executive Dashboard ',
        path:'/dashbaord/Executivedashbaord',
        icon: <LiaIcon.LiaChartBarSolid/>,
},
{
        title: 'HR Dashboard ',
        path:'/dashbaord/HRdashbaord',
        icon: <LiaIcon.LiaChartBarSolid/>,
},
    {title:'Tracker'},
    {
        title: 'Interview Tracker',
        path:'/dashbaord/InterviewTracker',
        icon: <Io5Icon.IoPersonAddOutline />,
    },

    {
        title: 'Employee Tracker',
        path:'/dashbaord/EmployeeTracker',
        icon: <PiIcon.PiAddressBookThin />,
    },

    {title: 'Lists'},

    {
        title: 'Interview Status',
        path:'/dashbaord/InterviewStatus',
        icon: <LiIcon.LuUsers2 />,
    },

    {
        title: 'Notice Period',
        path:'/dashbaord/NoticePeriod',
        icon: <SlIcon.SlCalender />,
    },
    {
        title: 'Candidate Source',
        path:'/dashbaord/CandidateSource',
        icon: <FaIcon.FaRegFolderOpen  />,
    },

    {
        title: 'Division',
        path:'/dashbaord/Division',
        icon: <LiIcon.LuUsers2 />,
    },
    {
        title: 'Section',
        path:'/dashbaord/Section',
        icon: <SlIcon.SlCalender />,

    },

    {
        title: 'Position',
        path:'/dashbaord/Position',
        icon: <FaIcon.FaRegFolderOpen  />,
    },

    {
        title: 'Grade',
        path:'/dashbaord/Grade',
        icon: <FaIcon.FaRegFolderOpen  />,
    },
    {
        title: 'Sector',
        path:'/dashbaord/Sector',
        icon: <SlIcon.SlCalender />,
    },

    {
        title: 'Job Category',
        path:'/dashbaord/JobCategory',
        icon: <MdIcon.MdOutlineFolderCopy />,
    },
    {
        title: 'Job Level',
        path:'/dashbaord/JobLevel',
        icon: <TfiIcon.TfiBag />,
    },
    {
        title: 'Sharepoint',
        
    },
    {
        title: 'HR Shared Folder',
        path:'/dashbaord/HRSharedFolder',
        icon: <FaIcon.FaRegFolderOpen  />,
    },  

    {
        title: 'Feedback',
    },

    {
        title: 'Survey Link',
        path:'/dashbaord/SurveyLink',
        icon: <IoCIcon.IoChatboxEllipsesOutline />,
    },

    {
        title: 'Survey Results',
        path:'/dashbaord/SurveyResults',
        icon: <TfIcon.TfiStatsUp />,
    },
]

export default SideBarData;
