import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder="search here" />
          <SearchIcon/>
        </div>
        <div className='items'>
          <div className='item'>
          <LanguageOutlinedIcon className="icon" />
          English
          </div>
          <div className='item'>
          <DarkModeOutlinedIcon className="icon" />
          
          </div>
          <div className='item'>
          <FullscreenExitOutlinedIcon className="icon" />
          
          </div>
          <div className='item'>
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className='counter'>1</div>
          </div>
          <div className='item'>
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className='counter'>2</div>
          </div>
          <div className='item'>
          <ListOutlinedIcon className="icon" />
          
          </div>
          <div className='item'>
          <img  src='https://i.dawn.com/large/2021/07/6104e14bf2ca8.png'
            alt=''
            className='avatar'
          />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
