import React from 'react'
import Rancor from '../../assets/rancor.png'
import Rancor_or from '../../assets/original/rancor.png'
import Rancor_top from '../../assets/rancor_top.png'

const Rancy = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Rancor} alt="at rt walker" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">Rancor - Minifig Scale</h1>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BGAMEEEH4KJ2U" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">CHF 25 - Add to cart</p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> The horrifying Rancor, inspired by <span className="italic font-bold">Star Wars Episode VI: Return of The Jedi</span> is minifig-scaled and inevitable for your next Jabba's Palace Build. </p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>392 Parts</li>
            <li>Bricklink Price: ~45 CHF</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor_top} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Rancy