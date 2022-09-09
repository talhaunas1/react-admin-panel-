import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import './home.scss'
import Chart from '../../components/chart/Chart'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>

        </div>
      </div>
    </div>
  )
}

export default Home
