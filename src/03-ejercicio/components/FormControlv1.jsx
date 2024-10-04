import { useState } from 'react';

function FormControlv1() {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    ciudad: '',
    profesion: ''
  });

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Actualiza el valor correspondiente
    });
  };

  return (
    <div>
      <h1>Formulario Controlado</h1>

      <form>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleInputChange} 
            placeholder="Introduce tu nombre"
          />
        </div>

        <div>
          <label>Apellido:</label>
          <input 
            type="text" 
            name="apellido" 
            value={formData.apellido} 
            onChange={handleInputChange} 
            placeholder="Introduce tu apellido"
          />
        </div>

        <div>
          <label>Correo:</label>
          <input 
            type="email" 
            name="correo" 
            value={formData.correo} 
            onChange={handleInputChange} 
            placeholder="Introduce tu correo"
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input 
            type="tel" 
            name="telefono" 
            value={formData.telefono} 
            onChange={handleInputChange} 
            placeholder="Introduce tu teléfono"
          />
        </div>

        <div>
          <label>Ciudad:</label>
          <input 
            type="text" 
            name="ciudad" 
            value={formData.ciudad} 
            onChange={handleInputChange} 
            placeholder="Introduce tu ciudad"
          />
        </div>

        <div>
          <label>Profesión:</label>
          <input 
            type="text" 
            name="profesion" 
            value={formData.profesion} 
            onChange={handleInputChange} 
            placeholder="Introduce tu profesión"
          />
        </div>
      </form>

      {/* Mostrando los datos en tiempo real */}
      <h2>Datos ingresados:</h2>
      <p><strong>Nombre:</strong> {formData.nombre}</p>
      <p><strong>Apellido:</strong> {formData.apellido}</p>
      <p><strong>Correo:</strong> {formData.correo}</p>
      <p><strong>Teléfono:</strong> {formData.telefono}</p>
      <p><strong>Ciudad:</strong> {formData.ciudad}</p>
      <p><strong>Profesión:</strong> {formData.profesion}</p>
    </div>
  );
}

export default FormControlv1;
