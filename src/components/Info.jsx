import React from 'react'

const Info = () => {
  return (
    <div>
        <h1 className='text-4xl md:text-6xl font-black uppercase my-16'>Info</h1>
    <div className="mx-4 mt-36">
        <h1 className="text-2xl md:text-4xl font-bold">About us</h1>
        <p className="md:text-xl">
          I, Neville Brem and William Tang are two students from Switzerland, who love to play and design with LEGO. In 2022, we came up with the idea to sell our designs as instructions. <br />
          William designed most of the sets, while I was busy building this site and processing all the orders.
        </p>
    </div>
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Buying Process</h1>
        <p className="md:text-xl">
          Our prices are in Swiss Franc (CHF), because we are a Switzerland-based company. After purchasing our products, we will send you the instructions, as well as the part list (for e.g. <a href='https://bricklink.com' className='font-bold'>Bricklink</a>) <br />
          To your email adress of your Paypal Account.
          <br />
          <br />
          You can Pay with Paypal or with Credit Card.
        </p>
    </div>

    <h1 className='text-4xl md:text-6xl font-black uppercase my-16'>Contact</h1>

    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Email</h1>
        <p className="md:text-xl">Contact us via Email: <a className="font-bold" href="mailto:support@willsbrix.com">support@willsbrix.com</a></p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Twitter</h1>
        <p className="md:text-xl">Send us a DM on Twitter: <a className="font-bold" href="https://twitter.com/willsbrix">@willsbrix</a></p>
    </div>
    <br />
    <div className="m-4">
        <h1 className="text-2xl md:text-4xl font-bold">Instagram</h1>
        <p className="md:text-xl">Follow us on Instagran: <a className="font-bold" href="https://instagram.com/willsbrixlego_official">@willsbrixlego_official</a></p>
    </div>
    </div>
  )
}

export default Info