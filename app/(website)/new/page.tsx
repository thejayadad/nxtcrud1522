import ShelfieForm from '@/components/form/shelfie-form'
import TitleText from '@/components/hero/title-text'
import React from 'react'

const NewPage = () => {
  return (
    <div className=''>
    <div className="flex flex-col mx-auto max-w-screen-lg p-4">
        <TitleText
        title='Add Reading Page'
        description='Fill out the information to add a reading to your shelfie :-)'
        backbutton
        />
        <div className='mt-12'>
            <ShelfieForm />
            {/* <BookForm /> */}
        </div>
    </div>
    </div>
  )
}

export default NewPage