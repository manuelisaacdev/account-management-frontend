import { Topbar } from '@/components'
import React from 'react'

export default function Layout({children}:Readonly<{children:React.ReactNode}>) {
    return (
        <main className='w-screen min-h-screen bg-[#c9d7f030]'>
            <Topbar />
            {children}
        </main>
    )
}
