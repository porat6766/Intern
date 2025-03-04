"use client"
import Link from 'next/link'
import React from 'react'
import { X } from "lucide-react"

const ResetButton = () => {
    const handleReset = () => {
        const form = document.querySelector("#search-form") as HTMLFormElement;
        console.log(form);

        if (form) {
            form.reset()
        }
    }
    return (
        <button className='text-black cursor-pointer' type='reset' onClick={handleReset}>
            <Link href="/" className='search-btn text-white'>
                <X />
            </Link >
        </button>
    )
}

export default ResetButton
