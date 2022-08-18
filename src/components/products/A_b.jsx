import React from 'react'
import Ab from '../../assets/ab_front.png'
import Ab_back from '../../assets/ab_back.png'
import Ab_or from '../../assets/original/ig-88.png'

const A_b = () => {
  return (
    <div>
        <div class="md:grid m-4 md:grid-cols-2">
        <img src={Ab} alt="black assassin droid" class="w-80 md:w-[720px] my-4 mx-auto border border-gray-300 rounded-xl" />
        <div class="my-auto">
        <h1 class="font-bold text-2xl md:text-4xl m-4">Black Assassin Droid</h1>
        <p class="text-xs text-gray-600">Before you place your order, check the <a class="font-semibold" href="info.html">Info</a> Page</p>
        <div class="m-4 flex justify-center space-x-10">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JE4FAGYHTQQVA" class="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><p class="font-bold text-xl md:text-3xl">$5 <i class="fa-solid fa-cart-plus my-auto"></i></p></a>
        </div>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Short description:</h2>
        <p class="text-sm md:text-lg mb-4">One of our first MOC's designed by William. <br /> The Assassin Droid is ideal for hunting bounty or serving in a gang. It offers many details and is minifigure-scaled.</p>
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Details:</h2>
        <ul class="text-sm md:text-lg list-disc mx-auto list-inside">
            <li>25 Parts</li>
            <li>2 Weapons Included</li>
        </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 class="text-xl md:text-3xl text-gray-500 font-bold">Gallery:</h2>
        <div class="flex flex-wrap justify-center gap-2 m-4"> 
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ab} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ab_back} alt="" />
            <img class="w-[480px] my-4 border border-gray-300 rounded-xl" src={Ab_or} alt="" />
        </div>
    </div>
    </div>
  )
}

export default A_b