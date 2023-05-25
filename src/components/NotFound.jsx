import React from 'react'

const NotFound = () => {
  return (
    <div className='my-80'>
        <h1 className='text-3xl font-bold font-mono'><i className='fa-solid fa-triangle-exclamation'></i> This page was not found...</h1>
        <p className='my-4 text-lg'>
            We are very sorry, but this page seems to not exist. <br />
            If you click <a className='font-bold' href='/'>here</a> if you want to return to the homepage.
        </p>
    </div>
  )
}

export default NotFound