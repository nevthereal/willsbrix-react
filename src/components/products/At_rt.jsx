import React from 'react'
import Atrt from '../../assets/atrt.png'
import Atrt_side from '../../assets/atrt_side.png'
import Atrt_back from '../../assets/atrt_back.png'
import Atrt_or from '../../assets/original/at-rt.png'

const At_rt = () => {
  return (
    <div>
        <div class="md:grid m-4 md:grid-cols-2">
        <img src={Atrt} alt="at rt walker" class="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div class="my-auto">
        <h1 class="font-bold text-2xl md:text-4xl m-4">AT-RT Walker</h1>
        <p class="text-xs text-gray-600">Before you place your order, check the <a class="font-semibold" href="info.html">Info</a> Page</p>
        <div  class="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8BEMJHHRBVJ7G" class="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p class="font-bold text-xl md:text-3xl my-auto">$15 <i class="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p class="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> This All-Terrain Recon Transporter is ideal for your MOC. Since it is not too big, you can buy it multiple times and display and put it in your base or battle field!</p>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul class="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>71 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div class="flex flex-wrap justify-center gap-2 m-4"> 
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt_back} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt_side} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Atrt_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default At_rt