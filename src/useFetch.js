// import {useState, useEffect} from 'react'

// export const useFetch = (url)=>{

  
// useEffect(() => {
//   const getUsers = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(url);
//       if(!response.ok){
//         throw new Error('Error en la respuesta de la Api')
//       }
//       const data = await response.json();
//       setUser(data);
//       setError(null)
//     } catch (error) {
//       setError(error.message);
//       console.error(error)
//     }finally{
//       setLoading(false)
//     }

//   };
//   getUsers();
// }, []);

// return {data}

// }