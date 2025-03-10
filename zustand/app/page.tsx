'use client'

import React from 'react'
import useCalculatorStore from './store/Calc'

const page = () => {
  const { value, add, subtract } = useCalculatorStore()
  return (
    <div className='text-3xl text-black mx-auto mt-30  bg-amber-500 w-100 h-100'>
      <h1 className=' text-6xl'>CALCULATOR</h1>
      <div className='w-full flex justify-center gap-4'>
        <button className='cursor-pointer' onClick={() => add()}>Add</button>
        <span>{value}</span>
        <button className='cursor-pointer' onClick={() => subtract()}>Subtract</button>
      </div>
    </div>
  )
}

export default page
