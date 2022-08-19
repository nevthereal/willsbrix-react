import React from 'react'
import Bs from '../../assets/barc_speeder.png'
import Bs_side from '../../assets/barc_speeder_side.png'
import Bs_back from '../../assets/barc_speeder_back.png'
import Bs_or from '../../assets/original/barc speeder.png'

const Barc = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Bs} alt="barc speeder" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">BARC Speeder</h1>
        <p className="text-xs text-gray-600">Before you place your order, check the <a className="font-semibold" href="info.html">Info</a> Page</p>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J4PKAF4NKQB9E" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">$20 <i className="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> The BARC (Biker Advanced Recon Commando) Speeder are light and optimal to use them in quantity for your Mocs!</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>119 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bs} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bs_back} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bs_side} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bs_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Barc