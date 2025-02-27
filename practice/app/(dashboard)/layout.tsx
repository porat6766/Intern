import React from 'react'
import Link from 'next/link'
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className='w-full text-3xl bg-amber-500'>
            <Link href="/">Home ; i am dashboard header </Link>
            {children}
        </header>
    )
}

export default layout
