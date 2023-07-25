// VentaPlantas.tsx
import React from 'react';

export const VentaPlantas = () => {
  return (
    <div>
      <h2 style={{ marginRight: '10px',
                  textAlign: 'center'}}>Venta De Plantas</h2>
    <br>
    </br>
      <div style={{ textAlign: 'center' }}>
        <div>
          <p>Mioporo</p>
          <img src="/images/ciudad.jpg" alt="ciudad" style={{ width: '200px', marginRight: '10px' }} />
          <p>Precio:</p>
        </div>
        <br />
        <div>
          <p>Hortensias</p>
          <img src="/images/ciudad.jpg" alt="ciudad" style={{ width: '200px', marginRight: '10px' }} />
          <p>Precio:</p>
        </div>
        <br />
        <div>
          <p>Lavanda</p>
          <img src="/images/ciudad.jpg" alt="ciudad" style={{ width: '200px', marginRight: '10px' }} />
          <p>Precio:</p>
        </div>
      </div>
    </div>
  );
};

export default VentaPlantas;
