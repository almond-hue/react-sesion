
import React, { useState } from 'react';

function Owner() {
 
  const [movies] = useState([
    { id: 1, title: 'Love, Rosie', year: 2014 },
    { id: 2, title: 'About Time', year: 2013 },
    { id: 3, title: 'Toy Story', year: 1995 },
    { id: 4, title: 'Harry Potter y la Piedra Filosofal', year: 2001 },
    { id: 5, title: 'Vivir el momento', year: 2025 },
  ]);

  return (
    <div className="owner-profile-container" style={{ padding: '20px', maxWidth: '800px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Sobre mí</h1>
    
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>

        <img
          src="https://static.vecteezy.com/system/resources/previews/023/984/924/original/smiling-business-woman-png.png" 
          alt="Foto de Perfil"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', border: '3px solid #007bff' }}
        />
      </div>

      {/* nombre*/ }
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
        <strong>Nombre:</strong> Natalia Urzúa </p>

      {/* Correo/Contacto */}
      <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>
        <strong>Contacto:</strong> <a href="natalia.urzua@hotmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>natalia.urzua@.com</a>
      </p>

      {/* Descripción */}
      <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
        <strong>Sobre mí:</strong> Soy una desarrolladora web apasionada.
      </p>

      <hr style={{ margin: '30px 0', borderColor: '#eee' }} />

      <h2>Mis Pelis Fav</h2>
      {movies.length > 0 ? (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {movies.map(movie => (
            <li key={movie.id} style={{ marginBottom: '8px', fontSize: '1.1em' }}>
              <strong>{movie.title}</strong> ({movie.year})
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay películas favoritas añadidas aún.</p>
      )}

       

      
    </div>
  );
}

export default Owner;