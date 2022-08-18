import React from 'react'
import Banner from '../assets/wb_banner.png'

const Info = () => {
  return (
    <div>
        <div id="header" style={{backgroundImage: `url(${Banner})`}} class="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh]">
        <div class="h-full w-full bg-black/25"></div>
        <p class="absolute top-[40vh] text-4xl md:text-6xl font-black uppercase tracking-wide bg-cover w-full">Info</p>
    </div>
    <div class="m-4">
        <h1 class="text-2xl md:text-4xl font-bold mb-4">How it works:</h1>
        <p class="md:text-xl">
            We accept Paypal as well as common Credit Cards (Mastercard, Visa etc.) <br />
            Select the Products you want and add them to your cart. After your order was placed, you will get redirected to a Google Drive Folder with your Instructions. <br />
            After your purchase, we will send you the Instructions and Informations about your Order (number of packages for example) via Email (the Email linked to your Paypal Account). 
        </p>
    </div>
    <br />
    <div class="m-4">
        <h1 class="text-2xl md:text-4xl font-bold">Email</h1>
        <p class="md:text-xl">Contact us via Email: <a class="font-bold text-cyan-500" href="mailto:support@willsbr /ix.com">contact@willsbr /ix.com</a></p>
    </div>
    <br />
    <div class="m-4">
        <h1 class="text-2xl md:text-4xl font-bold">Twitter</h1>
        <p class="md:text-xl">Send us a DM on Twitter: <a class="font-bold text-cyan-500" href="https://twitter.com/willsbr /ix">@willsbr /ix</a></p>
    </div>
    <br />
    <div class="m-4">
        <h1 class="text-2xl md:text-4xl font-bold">Instagram</h1>
        <p class="md:text-xl">Follow us on Instagran: <a class="font-bold text-cyan-500" href="https://instagram.com/willsbr /ixlego_official">@willsbr /ixlego_official</a></p>
    </div>
    </div>
  )
}

export default Info