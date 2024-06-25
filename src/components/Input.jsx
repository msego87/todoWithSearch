import React from 'react'

const Input = ({ onAddTask }) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const input = form.elements.inputInsert;
    const description = input.value;
    onAddTask(description);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  
        type='text'
        name='inputInsert'
        aria-label='Detalle de la tarea'
        placeholder='aprender React, comprar helado'
        required
      />
      <input type="submit" value="Agregar tarea" />
    </form>
  )
}

export default Input