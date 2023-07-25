import React, { useState } from 'react';
import { Persona } from '../Interfaces/IFormulario';
import { registrarPersona } from '../Firebase/Promesas';


export const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorSexo, setErrorSexo] = useState('');
  const [errorEdad, setErrorEdad] = useState(''); 




  const registrar = () => {
    if (nombre.trim() === '') {
      setErrorNombre('No valen espacios en blanco');
      return;
    } else {
      setNombre(nombre.trim());
      setErrorNombre('');
    }

    if (!sexo) {
      setErrorSexo('Seleccione una opción');
      return;
    } else {
      setErrorSexo('');
    }

    // Asumamos que se validó todo
    const p: Persona = {
      nombre,
      apellido,
      edad: parseInt(edad),
      sexo,
      fechaNacimiento,
      ciudad,
      correoElectronico,
    };
    registrarPersona(p);
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(sexo);
    console.log(fechaNacimiento);
    console.log(ciudad);
    console.log(correoElectronico);
    alert('Bienvenido ' + nombre + ' ' + apellido);
  };

  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre('Debe tener más de 3 letras');
    } else {
      setErrorNombre('');
    }
  };

  const handleSexoChange = (valor: string) => {
    setSexo(valor);
    setErrorSexo('');
  };

  const validarEdad = (valor: string) => {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(valor)) {
      setErrorEdad('Ingrese solo números para la edad');
    } else {
      setErrorEdad('');
      setEdad(valor);
    }
  };

  

  return (
    <div>
    <p>Este formulario te brinda la oportunidad de comunicarte con nosotros si tienes alguna pregunta o comentario relacionado
con nuestros productos o servicios. Queremos asegurarnos de brindarte la mejor experiencia posible, por lo que tus opiniones, 
comentarios y sugerencias son importantes para nosotros.Una vez que completes el formulario y lo envíes, 
nos pondremos en contacto contigo en base a la información que proporcionaste.Agradecemos tu interés en nuestros productos y servicios, 
y estamos ansiosos por recibir tus comentarios.</p>

  <div></div>
    <form>
      <label>Nombre: </label>
      <br />
      <input
        type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      />
      <br />
      <span>{errorNombre}</span>
      <br />

      <label>Apellido: </label>
      <br />
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <br />

      <label>Edad: </label>
      <br />
      <input type="text" onChange={(e) => validarEdad(e.target.value)} value={edad} />
      <br />
      <span>{errorEdad}</span> 
      <br />

     
      <label>Sexo:</label>
      <br />
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            name="sexo"
            value="masculino"
            checked={sexo === 'masculino'}
            onChange={(e) => handleSexoChange(e.target.value)}
          />
          Masculino
        </label>
        <br />
        <label className="radio-label">
          <input
            type="radio"
            name="sexo"
            value="femenino"
            checked={sexo === 'femenino'}
            onChange={(e) => handleSexoChange(e.target.value)}
          />
          Femenino
        </label>
      </div>
      <span>{errorSexo}</span>
      <br />

      <label>Fecha de Nacimiento:</label>
      <br />
      <input
        type="date"
        onChange={(e) => setFechaNacimiento(e.target.value)}
        value={fechaNacimiento}
      />
      <br />

      <label>Ciudad:</label>
      <br />
      <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="Copiapó">Copiapó</option>
        <option value="Caldera">Caldera</option>
        <option value="Paipote">Paipote</option>
      </select>
      <br />

      <label>Correo Electrónico:</label>
      <br />
      <input
        type="email"
        onChange={(e) => setCorreoElectronico(e.target.value)}
        value={correoElectronico}
      />
      <br />

      <button type="button" onClick={registrar}>
        Registrar
      </button>
    </form>
    </div>
  );
};
