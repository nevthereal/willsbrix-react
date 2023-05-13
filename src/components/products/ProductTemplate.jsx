import React from 'react'
import img_main from '../../assets/ab_front.png'
import img_2 from '../../assets/ab_back.png'
import img_3 from '../../assets/original/ig-88.png'

const Template = () => {

  const title = `Test`
  const addToCart = `Test`
  const price = `Test`
  const description = `Test`
  const parts = ``
  const weapons = ``
  const bl_price = ``


  return (
    <div>
        <div className="productContainer">
        <img src={img_main} alt="" className="productImageMain" />
        <div className="my-auto">
          <h1 className="productTitle">{title} - Instructions only</h1>
          <div className="productDescContainer">
          <a href={addToCart} className="productATCOutline"><p className="productATC">{price} - Add to cart</p></a>
          </div>
          <h2 className="productH2">Short description:</h2>
          <p className="text-sm md:text-lg mb-4">{description}</p>
          <h2 className="productH2">Details:</h2>
          <ul className="productList">
              <li>{parts} Parts</li>
              <li>{weapons} Weapons</li>
              <li>Bricklink price: {bl_price} CHF</li>
          </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="productH2">Gallery:</h2>
        <div className="productGalleryFlex"> 
            <img className="productGalleryImage" src={img_main} alt="" />
            <img className="productGalleryImage" src={img_2} alt="" />
            <img className="productGalleryImage" src={img_3} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Template