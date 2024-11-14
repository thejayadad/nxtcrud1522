import React from 'react'
import SearchBar from './search-bar'
import Link from 'next/link'
import {FiPlusCircle} from "react-icons/fi"


const ActionBar = () => {
  return (
    <div className='mt-12 flex items-center justify-between w-full space-x-4'>
        <SearchBar />
        <Link
            className='bg-gray-900 flex items-center space-x-2 p-2 rounded-full text-white hover:bg-gray-400'
        href={'/new'}>
            <FiPlusCircle className='h-4 w-4' />
            <p>Reading</p>
        </Link>
    </div>
  )
}

export default ActionBar