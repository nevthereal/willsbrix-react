import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-black text-white py-4 mt-8">
        <p className="text-xl md:text-lg font-bold uppercase">©Neville Brem and William Tang</p>
        <div className="flex w-16 justify-center mx-auto my-4 text-4xl md:2xl space-x-2">
            <a href="https://instagram.com/willsbrixlego_official" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="https://twitter.com/willsbrix" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-square-twitter"></i></a>
            <a href="mailto:support@willsbrix.com"><i className="fa-solid fa-square-envelope"></i></a>
        </div>
    </div>
    </div>
  )
}

export default Footer