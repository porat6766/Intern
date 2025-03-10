'use client'

import React from 'react'
import useCalculatorStore from '../store/Calc'

const page = () => {
    const { value } = useCalculatorStore()
    return (
        <div>
            {value}
        </div>
    )
}

export default page
