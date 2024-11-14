import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

interface Props {
  title: string;
  description: string;
  backbutton?: boolean; // Optional prop to show the back button
}

const TitleText = ({ title, description, backbutton }: Props) => {
  return (
    <div className='space-y-2 flex'>
      {/* Title Section */}
      <div className='flex space-x-4  items-center'>
      {backbutton && (
          <Link href='/' className='flex items-center'>
            <FiArrowLeft className='h-6 w-6 text-gray-600 mr-2' />
            <span className='text-orange-600 hover:underline'>Back Home</span>
          </Link>
        )}

      </div>
        <div className='flex flex-col space-x-2 ml-4'>
        <h1 className='text-2xl font-extrabold text-gray-900'>{title}</h1>

<p className='text-lg text-gray-500'>{description}</p>
        </div>
    </div>
  )
}

export default TitleText
