import React from 'react'

const Header = () => {
  return (
    <header className='border-b w-full h-20 p-4 flex items-center'>
        <nav className='mx-auto max-w-screen-lg flex items-center w-full'>
            <h1 className='text-xl font-extrabold -tracking-tighter text-gray-600'>
                Shelfie
            </h1>
        </nav>
    </header>
  )
}

export default Header