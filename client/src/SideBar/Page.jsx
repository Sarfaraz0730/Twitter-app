import React from 'react'
import "./Style.SideBar.css"
import LeftSideBar from './LeftSideBar'
export const Page = () => {
  return (
    <div id='container'>
        <div className='left'><LeftSideBar/></div>
        <div className='main'>Main</div>
        <div className='right'>Right</div>
    </div>
  )
}
