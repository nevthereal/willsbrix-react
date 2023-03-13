import React from 'react'
import Dd from '../../assets/droideka.png'
import Dd_side from '../../assets/droideka_side.png'
import Dd_or from '../../assets/original/droideka.png'

const Droideka = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Dd} alt="at rt walker" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">Droideka - Instructions only</h1>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4WJH9VBUFW36E" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">CHF 5 - Add to cart</p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4"><span className='italic'>"Destroyers!"</span> - Obi-Wan Kenobi <br /> The high-detailed and minifig-scaled Droideka served in the droid army of the Seperatists in the clone wars. You can roll him up, like in the movies.</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>35 Parts</li>
            <li>Bricklink price: ~4 CHF</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Dd} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Dd_side} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Dd_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Droideka