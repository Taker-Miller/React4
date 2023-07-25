import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './redes.css'; 

export const Footer = () => {
  return (
    <div style={{
      backgroundColor: 'purple',
      padding: '10px',
      textAlign: 'center',
      height: '280px',
      
    }}>
      <div style={{
          float:'left',
          fontSize: '15px',
          paddingLeft:'22px',
          boxSizing:'border-box',
        }} >
        <div>
          <h2>Contacto</h2>
        </div>

        <p style={{
          fontSize: '15px',
        }}>Horario de apertura al público: Sábados, Domingos y Festivos de 12h a 15h. Reservas de espacio: Hasta las 21h00.</p>

        <p style={{
          fontSize: '15px',
        }}>Horario de Verano: Sábados, Domingos y Festivos de 19h a 21h. Reservas de espacio: Hasta las 1h00. Julio y Agosto.</p>

        <p style={{
          fontSize: '15px',
        }}>Email: sebastian.villalobos26@inacapmail.cl</p>
        <p style={{
          fontSize: '15px',
        }}>Teléfono: +34 654 39 48 93</p>
      </div>

      <div style={{
          float:'left',
          fontSize: '15px',
          paddingLeft:'22px',
          boxSizing:'border-box',
        }}>
        <h2>Donde Estamos</h2>
        <div>
          <p style={{
          fontSize: '15px',
        }}>Valle Fertil, Cruce Barranquilla, Atacama</p>
        </div>
      </div>

      <div style={{
          float:'left',
          fontSize: '15px',
          paddingLeft:'22px',
          boxSizing:'border-box',
        }}>

        <div style={{
          float:'left',
          fontSize: '15px',
          paddingLeft:'22px',
          boxSizing:'border-box',
        }}>

        <h2>Redes Sociales</h2>
        <div style={{
          float:'left',
          fontSize: '15px',
          paddingLeft:'22px',
          boxSizing:'border-box',
        }}>
          <a href="https://www.facebook.com/sebastian.villalobos.39904" className="redes" style={{ backgroundImage: 'url(https://www.facebook.com/images/fb_icon_325x325.png)' }}><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/taker_miller/" className="redes" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png)' }}><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCfMlDscGIVIDQcUnUKymRbw" className="redes" style={{ backgroundImage: 'url(https://yt3.googleusercontent.com/ytc/AGIKgqPRVCTEhRVQrADl9rmBCDN7ODyBuwgqZ74AYkqNlw=s900-c-k-c0x00ffffff-no-rj)' }}><i className="fab fa-youtube"></i></a>
          <a href="https://twitter.com/TakerSeba" className="redes" style={{ backgroundImage: 'url(https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c)' }}><i className="fab fa-twitter"></i></a>
        </div>
        </div>
      </div>
    </div>
  );
};
