'use client'
import React, { useState } from 'react'
import { FaBook, FaMusic, FaFilm, FaPodcast } from 'react-icons/fa'
import { useActionState } from 'react';





const ShelfieForm = ({ onSubmit, initialData }: any) => {
  // Local state for the form fields
  const [title, setTitle] = useState(initialData?.title || '')
  const [author, setAuthor] = useState(initialData?.author || '')
  const [genre, setGenre] = useState(initialData?.genre || '')
  const [notes, setNotes] = useState(initialData?.note || '')
  const [rating, setRating] = useState(initialData?.rating || 0)
  const [readStatus, setReadStatus] = useState(initialData?.readStatus || false)

  // Genres options with icons and descriptions
  const genres = [
    { id: 'book', icon: <FaBook />, label: 'Book', description: 'A general book' },
    { id: 'music', icon: <FaMusic />, label: 'Music', description: 'Books about music' },
    { id: 'movie', icon: <FaFilm />, label: 'Movie', description: 'Books about movies or films' },
    { id: 'podcast', icon: <FaPodcast />, label: 'Podcast', description: 'Books related to podcasts' },
  ]

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, author, genre, note: notes, rating, readStatus })
  }

  return (
    <form onSubmit={handleSubmit} className='border p-6 rounded-md border-slate-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Title */}
          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Title</label>
            <input
              type='text'
              className='p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Book Title'
              required
            />
        </div>

        {/* Author */}
        <div className='flex flex-col'>
          <label className='text-lg font-semibold'>Author</label>
          <input
            type='text'
            className='p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Author Name'
            required
          />
        </div>
      </div>

      {/* Genre */}
      <div className='mt-6'>
        <label className='text-lg font-semibold'>Genre</label>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2'>
          {genres.map((g) => (
            <div
              key={g.id}
              className={`flex items-center p-3 border rounded-md cursor-pointer ${genre === g.id ? 'bg-blue-200' : ''}`}
              onClick={() => setGenre(g.id)}
            >
              <div className='mr-2'>{g.icon}</div>
              <div>
                <div className='font-semibold'>{g.label}</div>
                <div className='text-sm text-gray-500'>{g.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className='mt-6'>
        <label className='text-lg font-semibold'>Notes</label>
        <textarea
          className='p-2 mt-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder='Add any notes about this book...'
        />
      </div>

      {/* Rating */}
      <div className='mt-6'>
        <label className='text-lg font-semibold'>Rating</label>
        <div className='flex mt-2'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Read Status */}
      <div className='mt-6'>
        <label className='text-lg font-semibold'>Read Status</label>
        <div className='flex mt-2'>
          <label className='mr-4'>
            <input
              type='radio'
              name='readStatus'
              checked={readStatus === true}
              onChange={() => setReadStatus(true)}
            />
            <span className='ml-2'>Read</span>
          </label>
          <label>
            <input
              type='radio'
              name='readStatus'
              checked={readStatus === false}
              onChange={() => setReadStatus(false)}
            />
            <span className='ml-2'>Unread</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className='mt-6'>
        <button
          type='submit'
          className='w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700'
        >
          {initialData ? 'Update Shelfie' : 'Create Shelfie'}
        </button>
      </div>
    </form>
  )
}

export default ShelfieForm
