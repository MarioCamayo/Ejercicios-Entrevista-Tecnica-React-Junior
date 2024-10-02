/*
 Ejercicio 2: Consumo de API y renderizado de datos
Instrucciones: Crea un componente que consuma datos de una API pública (por ejemplo, jsonplaceholder.typicode.com) y muestre una lista de elementos. Implementa un botón que permita actualizar la lista al hacer clic.

Puntos clave a evaluar: uso de useEffect para consumir datos, renderizado dinámico de listas, manejo de useState.
*/


import {  useState, useEffect } from 'react';
// import { useFetch } from './components/useFetch.js';

function ConsumoApi() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
  const [visibleUsers, setVisibleUsers] = useState(5)

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
          throw new Error('Error en la respuesta de la Api')
        }
        const data = await response.json();
        setUsers(data);
        setError(null)
      } catch (error) {
        setError(error.message);
        console.error(error)
      }finally{
        setLoading(false)
      }
  
    };
    getUsers();
  }, []);

  // const {data} = useFetch('https://jsonplaceholder.typicode.com/users')

  // Función para mostrar más usuarios
  const loadMoreUsers = ()=>{
    setVisibleUsers(pre=>pre +5)
  }


  return (
    <>
      <h1>updateList</h1>

      {/* Botón para actualizar la lista */}

      {/* Mostrar un mensaje de error si ocurre alguno */}
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error} </p>}

      <ul>
        {users.slice(0, visibleUsers).map((user) => (
          <div key={user.id} className= 'container-list'>
            <li> {user.id}. {user.name}</li>
          </div>
        ))}
      </ul>


      {visibleUsers < users.length && (
       <button onClick= {loadMoreUsers} > Cargar más</button>)}
    </>
  );
}

export default ConsumoApi;
