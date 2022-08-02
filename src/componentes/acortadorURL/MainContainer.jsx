import React from 'react'

export default function MainContainer({children}) {
  return (
    <div className='flex bg-white justify-center items-center h-screen'>
        {children}

    </div>
  )
}
