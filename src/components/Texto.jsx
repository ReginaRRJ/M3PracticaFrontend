//import * as React from 'react'
import PropTypes from 'prop-types'; // Importa PropTypes


export default function ParrafoMensaje({ mensaje }) {
    return <p>{mensaje}</p>;
}

// Definición de PropTypes para el componente Subtitulo
ParrafoMensaje.propTypes = {
    mensaje: PropTypes.string.isRequired,  // 'mensaje' debe ser una cadena de texto y es requerido
  };