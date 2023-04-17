import React from 'react'
import './prueba3.css'
//import logo from '../../Media/logo.png'
//<img className="logo"src={logo} alt="" />
import image1 from '../../Media/istockphoto-1211786251-1024x1024.jpg'
import image2 from '../../Media/Repartidor-con-cajas.jpg'

export default function Prueba3() {
  return (

    <div>


    <div class="banner text-center">
      <div class="container">
        <div class="row">
          <div class="banner_content">
            <h2>Sublime Prints</h2>
            <p>Desde su lanzamiento hace más casi 10 años, SUBLIME PRINTS se propuso romper fronteras, achicar distancias y unir a todo el país.
              Cuando comenzamos con nuestra marca nos preguntamos que buscaba la gente. Con el correr del tiempo nos dimos cuenta que la gente busca lo mismo que nosotros:
              Disponer de prendas, objetos y accesorios únicos, personalizados, ya sea para uso propio o para regalar a sus seres más queridos, es por eso que brindamos la posibilidad de materializar las ideas.
              Queremos que nuestros clientes se sientan únicos, por lo que temporada tras temporada intentamos generar nuevos diseños y por sobre todas las cosas buena calidad. 
              Buscamos clientes a largo plazo. La gente que compra en SUBLIME PRINTS sabe que no apuntamos a fabricar productos que duren días o semanas, sino que apuntamos a mercadería que dure años. Si el cliente vuelve a comprar tiene que ser porque sacamos un diseño aún mejor que el que ya nos compró. Es por eso que también apuntamos a todo tipo de contextos.
              Gracias a nuestros productos de calidad, precios y trato personalizado, Sublime Prints comenzó el 2023 en más de 30 ciudades a lo largo del (PAIS XX?) gracias una lista de clientes que nos retribuyen con fidelidad y confianza.
              Vos estas a tiempo de adquirir nuestros productos  o de venderlo en tu local y llevarlo a tu barrio, ciudad o provincia.
              Podes conocernos a través de Whatsapp o conocer nuestra casa: av. Siempre viva jeje 123.
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
            <h4>DESDE CASA ES MAS FACIL</h4>
            <p>
              En Sublime Prints te dejamos administrar los tiempos. Desde el diseño, pasando por la carga de tallas hasta los pagos; Puedes hacer TODO desde tu casa y queda registrado en el sistema. Y para fechas clave, no te preocupes. Te enviamos emails, sms y alertas para que no te olvides de nada ;)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cakes_for_special_events p-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <h4>ENVÍO Y DEVOLUCIÓN GRATIS</h4>
            <p>Somos una empresa 100% online que confía sus productos a DHL Mail. Clientes de toda Latinoamérica reciben nuestros productos en sus hogares. El envío es gratuito para todos nuestros clientes, aunque también pueden recogerlo en nuestras oficinas. Pero eso no es todo: la empresa también ofrece devoluciones gratuitas.
            </p>
          </div>
          <div class="col-lg-6">
            <img src={image2} alt=""/>
          </div>
        </div>
      </div>
    </div>

    <div class="site_template">
      <div class="container text-center">

          <div class="site_template_heading p-5">
            <h3>Algunos de nuestros trabajos</h3>
          </div>
        <div class="d-flex flex-row flex-wrap m-auto">

            <div class="p-1 ">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/mousepad.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/outfitpack.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/Backpack.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1 text-center">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/mug.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/3cap.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/cap.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/t-shirtWhite.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/3mug.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/t-shirt.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/keychain.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/WaterBottle.jpg" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/foto de prueba" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>    

            <div class="p-1">
              <img src="https://sublimeprint.nyc3.digitaloceanspaces.com/foto de prueba" alt=""/>
              <p>ejemplo ejemplo ejemplo</p>
            </div>     
        </div>
      </div>
    </div>

</div>
    

  )
}
