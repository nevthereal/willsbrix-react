import React from 'react'
import Rancor from '../../assets/rancor.png'
import Rancor_or from '../../assets/original/rancor.png'
import Rancor_top from '../../assets/rancor_top.png'
import Rancor_side from '../../assets/rancor_side.png'

const Rancy = () => {
  return (
    <div>
        <div class="md:grid m-4 md:grid-cols-2">
        <img src={Rancor} alt="at rt walker" class="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div class="my-auto">
        <h1 class="font-bold text-2xl md:text-4xl m-4">Rancor - Minifig Scale</h1>
        <p class="text-xs text-gray-600">Before you place your order, check the <a class="font-semibold" href="info.html">Info</a> Page</p>
        <div  class="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BGAMEEEH4KJ2U" class="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p class="font-bold text-xl md:text-3xl my-auto">$40 <i class="fa-solid fa-cart-plus"></i></p></a>
        </div>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p class="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> The horrifying Rancor, inspired by <span class="italic font-bold">Star Wars Episode VI: Return of The Jedi</span> is minifig-scaled and inevitable for your next Jabba's Palace Build. </p>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul class="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>392 Parts</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div class="flex flex-wrap justify-center gap-2 m-4"> 
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor_side} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor_top} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Rancor_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Rancy