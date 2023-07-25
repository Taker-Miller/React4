import React, { useState } from 'react';


interface Props {
  nombre: string | number;
  apellido?: string;
}

export const Saludo = (props: Props) => {
  const [contraste, setContraste] = useState(false);

  const cambiarContraste = () => {
    setContraste(!contraste);
  };

  const estiloContenido = {
    // Estilo para el contraste claro
    filter: contraste ? 'invert(1) hue-rotate(180deg)' : 'none',
    // Estilo para el fondo dependiendo del contraste
    backgroundColor: contraste ? 'gray' : '#193d3d',
    // Estilo para los elementos h2 dependiendo del contraste
    color: contraste ? 'white' : 'rgb(211, 20, 155)', // Color blanco para contraste claro, rosado para contraste oscuro
    padding: '20px', 
  };

  return (
    
    <div style={estiloContenido}>
       <button onClick={cambiarContraste}>Cambiar Contraste</button>
      <div>
       
        <h2>¡BIENVENIDOS A NUESTRA PAGINA DE KING GARDEN!</h2>
        <p>En esta página encontrarás una amplia variedad de plantas, 
          herramientas de jardinería y consejos para el cuidado de tus plantas. Somos una tienda online especializada en plantas de interior y exterior, 
          con envío a domicilio en todo Copiapó, Chile. Además, realizamos entregas en Paipote, Tierra Amarilla y Caldera. 
          En King Garden, te ofrecemos: Plantas de Interior: Descubre nuestras hermosas plantas de interior que agregarán vida y belleza a tu hogar. 
          Desde exuberantes helechos hasta elegantes lirios de la paz, tenemos la planta perfecta para cada espacio. 
          Plantas de Exterior: Encuentra una amplia selección de plantas de exterior que prosperarán en tu jardín, patio o balcón. 
          Ya sea que estés buscando coloridas flores, árboles frutales o plantas aromáticas, estamos aquí para ayudarte a crear un oasis verde al aire libre. 
          Herramientas de Jardinería: Descubre nuestras herramientas de jardinería duraderas y funcionales que te ayudarán a cuidar tus plantas de manera efectiva. 
          Desde palas y rastrillos hasta regaderas y tijeras de podar, tenemos todo lo que necesitas para mantener tu jardín en óptimas condiciones. 
          Consejos de Cuidado de Plantas: ¿No estás seguro de cómo cuidar tus plantas? No te preocupes, estamos aquí para ayudarte. 
          En nuestra página, encontrarás consejos prácticos y guías útiles sobre el riego, la poda, la exposición al sol y otros aspectos importantes para mantener tus plantas saludables y felices. 
          Realizar un pedido en nuestra tienda online es fácil y conveniente.Simplemente selecciona los productos que deseas, completa el proceso de compra y nosotros nos encargaremos de entregártelos directamente en la puerta de tu casa.</p>
      </div>
      <br />
      <br />
     
     
    </div>
  );
};
