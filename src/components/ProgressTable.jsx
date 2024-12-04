import React from 'react'
import ProgressBar from './ProgressBar'
import { PRODUCTS } from '../constant'

const ProgressTable = () => {
  return (
    <div>
      <table className='w-full'>
        <thead>
            <tr className=' text-sm'>
                <th className='p-3'>#</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
        {
            PRODUCTS && PRODUCTS.map((data)=>(
                <tr key={data.sn} className='border-t border-slate-200 text-center text-sm'>
                <td>{data.sn}</td>
                <td>{data.name}</td>
                <td> <ProgressBar percentage={data.sales} barColor={data.barColor} bgColor={data.bgColor}/> </td>
                <td><button style={{borderColor:`${data.barColor}`,backgroundColor:`${data.bgColor}`, opacity:0.5}} className='border p-1 px-3 my-2 rounded-xl'>{data.sales}%</button></td>
            </tr>
            ))
        }
           
        </tbody>
      </table>
    </div>
  )
}

export default ProgressTable
