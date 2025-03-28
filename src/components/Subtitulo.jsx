//import * as React from 'react'
import PropTypes from 'prop-types'; // Importa PropTypes


export default function Subtitulo({ mensaje }) {
    return <h3>{mensaje}</h3>;
}

// Definición de PropTypes para el componente Subtitulo
Subtitulo.propTypes = {
    mensaje: PropTypes.string.isRequired,  // 'mensaje' debe ser una cadena de texto y es requerido
  };