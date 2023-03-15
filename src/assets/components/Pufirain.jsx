import React from 'react'

const Pufirain = () => {
  return (
    <section id='rain' className='pufi_rain'>
      <div className='rain'>
            <button className='btn btn_rain'>SHOP</button>
      </div>
      <div className='umbrella'>
        <img src="./src/image/umbrella.png" alt="" className='img_umbrella'/>
        <h2 className='title2'>Pufi RAIN</h2>
        <hr />
        <p className='p_2'>Descripcion del producto. este es un texto simulado</p>
        <a href="" target='_blank'> &gt; ver mas</a>
      </div>
    </section>
  )
}

export default Pufirain
