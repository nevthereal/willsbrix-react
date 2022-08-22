import React from 'react'
import Cd from '../../assets/crab droid.png'
import Cd_side from '../../assets/crab droid_side.png'
import Cd_back from '../../assets/crab droid_back.png'
import Cd_of from '../../assets/original/crab droid.png'

const Crab = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Cd} alt="Crab droid" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">Crab Droid</h1>
        <p className="text-xs text-gray-600">Before you place your order, check the <a className="font-semibold" href="/info">Info</a> Page</p>
        <div className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GTA2WX6LF6SGQ" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">$10 <i className="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">Designed by William. <br /> The Crab Droid is an important part of the separatist droid army and was designed by the Techno-Union. It offers many details and is minifigure-scaled.</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>78 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Cd} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Cd_side} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Cd_back} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Cd_of} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Crab