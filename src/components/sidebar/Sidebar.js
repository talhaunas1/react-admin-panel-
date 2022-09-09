import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>talhaAdmin</span>
            </div>

            <hr />

            <div className='center'>
                <ul>
                    <p className='title'> MAIN </p>
                    <li> <DashboardIcon className='icon' /> <span> dashboard</span> </li>


                    <p className='title'> LISTS </p>
                    <li> <PersonOutlineIcon className='icon' /> <span> users</span> </li>
                    <li> <StoreIcon className='icon' /> <span> products</span> </li>
                    <li> <CreditCardIcon className='icon' /> <span> orders</span> </li>
                    <li> <LocalShippingIcon className='icon' /> <span> delivery</span> </li>


                    <p className='title'> USEFUL </p>
                    <li> <InsertChartIcon className='icon' /> <span> stats</span> </li>
                    <li> <NotificationsNoneIcon className='icon' /> <span> notifications</span> </li>

                    <p className='title'> SERVICES </p>
                    <li> <MonitorHeartIcon className='icon' /> <span> system health</span> </li>
                    <li> <PsychologyOutlinedIcon className='icon' /> <span> logs</span> </li>
                    <li> <SettingsIcon className='icon' /> <span> setting</span> </li>


                    <p className='title'> USER </p>
                    <li> <AccountCircleIcon className='icon' /> <span> profile</span> </li>
                    <li> <LogoutIcon className='icon' /> <span> Logout</span> </li>


                </ul>
            </div>

            <div className='bottom'>  
            
            <div className='colorOption'></div>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
            
            </div>

        </div>
    )
}

export default Sidebar
