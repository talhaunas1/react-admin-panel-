import React from 'react'
import './featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'> Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className='bottom'>
        <div className='fearturedChart'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>4429</p>
        <p className='decs'>this is a descripiton of the progress bar</p>

        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult'>
            <KeyboardArrowDownIcon  fontSize='small' /> 
            <div className='resultAmount'>$18k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult'>
            <KeyboardArrowDownIcon  fontSize='small' /> 
            <div className='resultAmount'>$18k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult'>
            <KeyboardArrowDownIcon  fontSize='small' /> 
            <div className='resultAmount'>$18k</div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default featured
