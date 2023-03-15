import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("mqkolgqd");
    if (state.succeeded) {
       
    }
    

  return (
    <section className='form'>
        <span className='title1'>INSTAGRAM</span>
        <h2 className='subtitle'>#ESPUFI</h2>
      <div className='instagram'>
        <img src="./src/image/cart.jpg" alt=""  className='img_ig'/>
        <img src="./src/image/header.jpg" alt="" className='img_ig'/>
        <img src="./src/image/nap.jpg" alt="" className='img_ig'/>
        <img src="./src/image/paraguas.jpg" alt="" className='img_ig'/>
        <img src="./src/image/puff.jpg" alt="" className='img_ig'/>
        <img src="./src/image/theother.jpg" alt="" className='img_ig'/>
      </div>
      <span className='title1'>NEWSLETTER</span>
      <h2 className='subtitle'>SUSCRIBETE</h2>
      <p>Y enterate de todas las novedades</p>
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email" >
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ingresa tu Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting} className= 'btn_form'>
      &gt;
      </button>
    </form>

      </div>
    </section>
  )
}

export default Form
