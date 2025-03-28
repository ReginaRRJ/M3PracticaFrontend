import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'

export default function ButtonRojo({ valorVerde }) {
    const [correcto, setCorrecto] = useState(true);
    const textoBoton = correcto ? "Correcto" : "Incorrecto" ;
  
    return (
      <div>
        <Button
          variant="contained"
          color={textoBoton === valorVerde ? "success" : "primary"} // Si coincide, será verde
          onClick={() => setCorrecto(!correcto)}
        >
          {textoBoton}
        </Button>
      </div>
    );
}