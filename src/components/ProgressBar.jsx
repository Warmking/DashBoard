import React from 'react'

const ProgressBar = ({percentage=0,bgColor='',barColor=''}) => {
  return (
    <div style={{
        backgroundColor:`${bgColor}`
    }} className='w-36 h-[0.3rem] bg-[#CDE7FF] overflow-hidden rounded-full'>
    <div
        style={{
          width: `${percentage}%`,
          backgroundColor: `${barColor}`,
        }}
        className="h-[0.3rem] transition-all duration-300 rounded-full"
      ></div>
    </div>
  )
}

export default ProgressBar
