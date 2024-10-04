/*
 Ejercicio 2: Consumo de API y renderizado de datos
Instrucciones: Crea un componente que consuma datos de una API pública (por ejemplo, jsonplaceholder.typicode.com) y muestre una lista de elementos. Implementa dos botónes siguiente y anterior que permita actualizar la lista al hacer clic.

Puntos clave a evaluar: uso de useEffect para consumir datos, renderizado dinámico de listas, manejo de useState.
*/

import { useState, useEffect } from 'react';

function ComsumoApiv1() {

  const [items, setItems] = useState([]);     // Estado para almacenar los posts
  const [offset, setOffset] = useState(0);    // Estado para controlar el desplazamiento (offset) en la lista de posts
  const [isLoading, setIsLoading] = useState(false); // Controla si los datos están cargando
  const [data, setData] = useState([]);       // Almacena todos los posts para controlar el flujo

  // Función para obtener datos de la API
  const obtenerDatos = async () => {
    setIsLoading(true);
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await respuesta.json();
    setData(datos); // Almacena todos los posts al inicio
    
    const nuevosItems = datos.slice(0, 10); // Muestra los primeros 10 posts
    setItems(nuevosItems);
    setOffset(10); // Inicializa el offset en 10 para los siguientes posts
    setIsLoading(false);
  };

  // Función para mostrar los posts siguientes
  const mostrarSiguientes = () => {
    const nuevosItems = data.slice(offset, offset + 10);
    setItems(nuevosItems);
    setOffset(prevOffset => prevOffset + 10);
  };

  // Función para mostrar los posts anteriores
  const mostrarAnteriores = () => {
    const nuevosOffset = offset - 10;
    const nuevosItems = data.slice(nuevosOffset - 10, nuevosOffset);
    setItems(nuevosItems);
    setOffset(nuevosOffset);
  };

  // Cargar los primeros 10 posts al montar el componente
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={mostrarAnteriores} disabled={offset <= 10 || isLoading}>
        Anterior
      </button>
      <button onClick={mostrarSiguientes} disabled={offset >= data.length || isLoading}>
        Siguiente
      </button>
    </div>
  );
}

export default ComsumoApiv1;
