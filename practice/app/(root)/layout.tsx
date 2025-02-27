import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header className='text-3xl bg-blue-400'>i am showww ; i am root header</header>
            {children}
        </div>
    )
}

export default layout
