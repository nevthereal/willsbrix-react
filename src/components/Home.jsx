import React from 'react'
import Barcspeeder from '../assets/barc_speeder.png'
import Atrt from '../assets/atrt.png'
import Crabdroid from '../assets/crab droid.png'
import Rancor from '../assets/rancor.png'
import Banner from '../assets/wb_banner.png'



const Home = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${Banner})`}} id="header" class="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh] bg-white">
        <div class="h-full w-full bg-black/25"></div>
        <p class="absolute top-[40vh] text-4xl md:text-6xl font-black uppercase tracking-wide bg-cover w-full">
        WILL'S Brix <br />
        <span class="text-base md:text-lg">LEGO® MOC's from Switzerland!</span><br />
        </p>
    </div>
    <p class="bg-orange-200 border rounded-2xl border-orange-300 w-[90%] lg:w-96 mx-auto my-4 p-4"><span class="font-semibold">Note:</span> It is possible, that your bricks will be sent in different packages, because we order them all from <a class="text-gray-800 font-semibold" href="https://bricklink.com">Bricklink</a> directly to you!</p>
    <h1 class="text-3xl font-bold uppercase my-4">Featured:</h1>
    <div id="featured" class="flex justify-center gap-4 flex-wrap">
        <div class="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="barc-speeder">
                <img class="p-2 w-96 mx-auto rounded-3xl" src={Barcspeeder} alt="at-rt" />
                <p class="mb-4 font-bold text-2xl text-center">BARC Speeder</p>
                <p class="text-gray-700 font-bold">$20</p>
            </a>
        </div>
        <div class="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="at-rt-walker">
                <img class="p-2 w-96 mx-auto rounded-3xl" src={Atrt} alt="at-rt" />
                <p class="mb-4 font-bold text-2xl text-center">AT-RT Walker</p>
                <p class="text-gray-700 font-bold">$15</p>
            </a>
        </div>
        <div class="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="crabdroid">
                <img class="p-2 w-96 mx-auto rounded-3xl" src={Crabdroid} alt="at-rt" />
                <p class="mb-4 font-bold text-2xl text-center">Crab Droid</p>
                <p class="text-gray-700 font-bold">$10</p>
            </a>
        </div>
        <div class="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
            <a href="rancor">
                <img class="p-2 w-96 mx-auto rounded-3xl" src={Rancor} alt="at-rt" />
                <p class="mb-4 font-bold text-2xl text-center">Rancor (Minifig Scale)</p>
                <p class="text-gray-700 font-bold">$40</p>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Home