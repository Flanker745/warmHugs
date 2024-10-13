import React from 'react'
import img from "./assets/upcomming.jpeg"
function Upcoming() {
  return (
    <>
        <h4 className='text-center py-8 font-bold  text-4xl'>Upcoming Event</h4>   
        <div className='w-screen h-screen'>
            <img src={img} className='w-full h-full' alt="" />

        </div>
    </>
  )
}

export default Upcoming