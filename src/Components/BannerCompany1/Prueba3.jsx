import React from 'react'
import './prueba3.css'
//import logo from '../../Media/logo.png'
//<img className="logo"src={logo} alt="" />
import image1 from '../../Media/compra-desde-casa.jpg'
import image2 from '../../Media/Repartidor-con-cajas.jpg'

export default function Prueba3() {
  return (

  <div className='company-g'>


    <div class="banner text-center">
      <div class="container">
        <div class="row">
          <div class="banner_content">
            <h2>Sublime Prints</h2>
            <p>Since its launch almost 10 years ago, SUBLIME PRINTS has set out to break borders, narrow distances and unite the entire country.
When we started our brand, we asked ourselves what people were looking for. Over time we realized that people are looking for the same thing as us:
Having unique, personalized garments, objects and accessories, either for your own use or to give to your loved ones, that is why we offer the possibility of materializing ideas.
We want our customers to feel unique, so season after season we try to generate new designs and above all good quality.
We are looking for long-term clients. People who shop at SUBLIME PRINTS know that we don't aim to make products that last days or weeks, but rather merchandise that lasts for years. If the customer buys again, it has to be because we produced an even better design than the one they already bought from us. That's why we also target all kinds of contexts.
Thanks to our quality products, prices and personalized service, Sublime Prints began 2023 in more than 30 cities throughout the country thanks to a list of clients who reward us with loyalty and trust.
You are in time to purchase our products or sell it in your local and take it to your neighborhood, city or province.
You can meet us through Whatsapp or visit our headquarters: Bv. The Germans 3639.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="gingerbread_house_asterclass p-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src={image1} alt=""/>
          </div>
          <div class="col-lg-6 align-self-center">
            <h4>FROM HOME IS EASIER</h4>
            <p>
            At Sublime Prints we let you manage the times. From the design, through the loading of sizes to the payments;
            You can do EVERYTHING from your home and it is registered in the system. And for key dates, don't worry.
            We send you emails, sms and alerts so you don't forget anything ;)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cakes_for_special_events p-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <h4>FREE SHIPPING AND RETURNS</h4>
            <p>We are a 100% online company that entrusts its products to DHL Mail.
                Customers from all over Latin America receive our products in their homes.
                Shipping is free for all our customers, although they can also pick it up at our offices.
                But that's not all: the company also offers free returns.
            </p>
          </div>
          <div class="col-lg-6">
            <img src={image2} alt=""/>
          </div>
        </div>
      </div>
    </div>

</div>
    

  )
}
