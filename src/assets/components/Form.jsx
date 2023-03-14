import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("mqkolgqd");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    

  return (
    <section>
        <span>INSTAGRAM</span>
        <h2>#ESPUFI</h2>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <span>NEWSLETTER</span>
      <h2>SUSCRIBETE</h2>
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

      <button type="submit" disabled={state.submitting}>
      &gt;
      </button>
    </form>

      </div>
    </section>
  )
}

export default Form
