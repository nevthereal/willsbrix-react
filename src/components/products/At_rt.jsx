import React from 'react'
import Atrt from '../../assets/atrt.png'
import Atrt_back from '../../assets/atrt_back.png'
import Atrt_or from '../../assets/original/at-rt.png'

const At_rt = () => {
  return (
    <div>
        <div className="md:grid m-4 md:grid-cols-2">
        <img src={Atrt} alt="at rt walker" className="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div className="my-auto">
        <h1 className="font-bold text-2xl md:text-4xl m-4">AT-RT Walker - Instructions only</h1>
        <div  className="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8BEMJHHRBVJ7G" className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p className="font-bold text-xl md:text-3xl my-auto">CHF 15 - Add to cart</p></a>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p className="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> This All-Terrain Recon Transporter is ideal for every MOC. Since it is not too big, you can build it multiple times and display or put it in your base or battle field! It is capable of holding a trooper and 2 weapons!</p>
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul className="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>71 Parts</li>
            <li>Bricklink Price: ~6.50 CHF</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div className="flex flex-wrap justify-center gap-2 m-4"> 
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt_back} alt="" />
            <img className="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default At_rt