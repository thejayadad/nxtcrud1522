'use client'
import { createBook } from '@/lib/add-shelfie';
import React from 'react'
import { useActionState } from 'react';
import { SubmitButton } from './submit-button';


interface NewBookProps {
    title: string;
    author: string;
    note: string;
    readStatus: string;
    rating: string
}
const BookForm: React.FC<NewBookProps> = () => {
    const [state, formAction] = useActionState(createBook, null); // Handle form state


  return (
    <form
    action={formAction}
    >
        <input name='title' id='title' placeholder='Name' />
        <input name='author' id='author' placeholder='Author' />
        <input name='note' id='note' placeholder='Note' />
        <input name='readStatus' id='readStatus' placeholder='Status'  />
        <input name='rating' id='rating' placeholder='Rating'  />
        <SubmitButton label='Create' />
    </form>
  )
}

export default BookForm