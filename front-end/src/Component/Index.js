import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('./Signup')
  }
  return (
    <div>
      <div className='indexpage-1'>
        <h3>References</h3><br />
        <h1>Guide to Country Profiles</h1><br />
        <h3>These are the Categories, Fields, and subfields of <br />
          information generally recorded for each country.<br />
          Links are to the definition of the entry, as<br />
          well as the field listing for the selected field.</h3>
          <button onClick={handleClick} id='getbtn'>Get start <a href='#'><i class="fa-solid fa-circle-arrow-right fa-lg"></i></a></button> 
      </div>
      
    </div>
  )
}
