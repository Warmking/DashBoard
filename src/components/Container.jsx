import React from 'react'

const Container = ({title='Title',children,showExtraInfo=false}) => {
  return (
    <div className='m-4  bg-white rounded-xl max-w-[580px]'>
      <header className='flex'>
        <h3 className='text-[1rem] font-bold px-2 py-1 mx-2 mt-2'>{title}</h3>
        {showExtraInfo && <div className="m-2">
            <input type="date" className='px-2 text-orange-400 cursor-pointer text-xs' name="" id="" />
            <button className='p-1 text-xs font-medium border border-black rounded-md'> <i className="uil uil-download-alt text-sm px-1"></i> Download</button>
        </div>}
      </header>
      {
        children
      }
    </div>
  )
}

export default Container
