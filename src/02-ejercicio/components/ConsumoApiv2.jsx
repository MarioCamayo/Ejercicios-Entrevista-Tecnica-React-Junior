/*
 Ejercicio 2: Consumo de API y renderizado de datos
Instrucciones: Crea un componente que consuma datos de una API pública (por ejemplo, jsonplaceholder.typicode.com) y muestre una lista de elementos. Implementa dos botónes siguiente y anterior que permita actualizar la lista al hacer clic.

Puntos clave a evaluar: uso de useEffect para consumir datos, renderizado dinámico de listas, manejo de useState.
*/

import { useState, useEffect } from 'react';

function ComsumoApiv2() {
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

  // Calcular el rango actual de posts mostrados
  const rangoInicial = offset - 10 + 1;
  const rangoFinal = offset;

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <h3>Mostrando posts del {rangoInicial} al {rangoFinal}</h3> {/* Subtítulo que muestra el rango actual de posts */}

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <strong>{rangoInicial + index}.</strong> {item.title} {/* Enumeración de los posts */}
          </li>
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

export default ComsumoApiv2;
