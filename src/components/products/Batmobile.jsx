import React from 'react'
import Bm from '../../assets/batmobile.png'
import Bm_back from '../../assets/batmobile_back.png'
import Bm_side from '../../assets/batmobile_side.png'
import Bm_or from '../../assets/original/batmobile.png'

const Batmobile = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Bm} alt="batmobile" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">Batmobile</h1>
        <p className="text-xs text-gray-600">Before you place your order, check the <a className="font-semibold" href="info.html">Info</a> Page</p>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=C6EVNB3S6CGEC" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">$15 <i className="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">One of our first MOC's designed by Neville. <br /> This Batmobile, Inspired by the Comics is ideal to play with or display.</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>92 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bm} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bm_side} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bm_back} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Bm_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Batmobile