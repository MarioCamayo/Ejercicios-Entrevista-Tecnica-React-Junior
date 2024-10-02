/*
Ejercicio 1: Crear un contador simple
Instrucciones: Crea un componente funcional que tenga un contador que aumente o disminuya cuando se presionen dos botones separados. Usa useState para gestionar el estado del contador.

Puntos clave a evaluar: uso de useState, manejo de eventos en React.
*/ 


import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const Increment = ()=>{
    setCount(count + 1)
  }

  const Decrement = ()=>{
    setCount(count - 1)

  }

  const Reset = ()=>{
    setCount(0)

  }

  return (
    <div >
      <h2>Contador</h2>
      <h2> {count} </h2>
      <section style= {{display:'flex', gap:'5px'}}>
        <button onClick= {Increment} >Increment</button>
        <button onClick= {Decrement} >Decrement</button>
        <button onClick= {Reset} >Reset</button>
      </section>
    </div>
  )
}

export default Counter