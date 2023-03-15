import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='others'>
      <div  >
        <p className='p'>Pufi</p>
        </div>
        <div className='puff'>
        <a href="#rain">PUFI RAIN</a>
        <a href="#puff">PUFI PUFF</a>
        <a href="#cart">PUFI CART</a>
        <a href="#nap">PUFI NAP</a>
        </div>
      
      <div className='contac'>
      <a href="#">CONTACTO</a>
      <a href="#">AYUDA</a>
      <a href="#">COMO COMPRAR</a>
      <a href="#">TERMINOS & CONDISIONES</a>
      </div>
      <div className='sale'>
        <h2  className='title2'>COMPRA 100% SEGURA</h2>

        <p>COMPRA CON GARANTIA DE PUFI</p>
        <img src="./src/image/QR.jpg" alt="" className='shop1' />
        <img src="/src/image/pufi12.png" alt="" className='shop2'/>
      </div>
      <div>
        <p> SIGUENOS EN </p>
        <img className='icons' src="./src/image/facebook-2.jpg" alt="" />
        <img className='icons' src="./src/image/twitter.jpg" alt="" />
        <img className='icons' src="./src/image/instagram.jpg" alt="" />
      </div>
      </div>
      
      <div className='copy'>
      <div className='copy2'>
        <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
        <img src="./src/image/brandlive.png" alt="brandlive" className='brandlive' />
      </div>
      </div>
      
    </footer>
  )
}

export default Footer
