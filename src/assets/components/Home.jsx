import React from 'react'

const Home = () => {
  return (
    <header className='header'>
      <h1 className='title'>Pufi</h1>
      <div className='header_nav'>
        <div className='a_nav'>
        <img src="https://img.icons8.com/ios/50/ffffff/java-coffee-bean-logo.png" className='header_icon'/>
          <a href="#" className='header_a' target='_blank'>PUFI PUFF</a>
        </div>
        <div className='a_nav'>
            <img src="https://img.icons8.com/ios/50/ffffff/umbrella.png" className='header_icon' />
          <a href="#" className='header_a' target='_blank'>PUFI RAIN</a>
        </div>
        <div className='a_nav'>
            <img src="https://img.icons8.com/pastel-glyph/64/ffffff/bag-front-view--v2.png" className='header_icon' />
          <a href="#" className='header_a' target='_blank'>PUFI CART</a>
        </div>
        <div className='a_nav'>
            <img src="https://img.icons8.com/ios/50/ffffff/napping.png" className='header_icon' />
          <a href="#" className='header_a1' target='_blank'> PUFI NAP</a>

        </div>
      </div>
      <div className='header_other'>
        <a href="#" className='header_a' target='_blank'>MI CUENTA</a>
        <a href="#" className='header_a1' target='_blank'>MI COMPRA</a>
      </div>

      <div className='header_info'>
        <h2 className='info_h2'>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h2>
        <button className='btn'> S H O P </button>
      </div>
    </header>
  )
}

export default Home
