import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ParrafoMensaje from "./../components/Texto"

export default function Dashboard() {

  const titulo = "Endpoint."
  const parrafo = "Un endpoint es una URL específica dentro de una API a la que se puede hacer una solicitud para obtener o enviar datos. Es el punto de acceso a una funcionalidad particular de un servidor o servicio web."
  const titulo2 = "Ejemplos de endpont."
  const parrafo2 = "GET /usuarios → Obtiene la lista de usuarios"
  const parrafo3 = "GET /usuarios/123 → Obtiene la información del usuario con ID 123"
  //const parrafo4 = "POST /usuarios → Crea un nuevo usuario"

  return (
    <>
      <div style={{ padding: 10, textAlign: "left" }}>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            component={Link} 
            to="/dashboard"
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            >
            Introducción
          </Button>
          <Button
            component={Link} 
            to="/info"
            variant="contained"
            color= "primary"
            sx={{ marginRight: 2 }}
          >
            Más Info
          </Button>
          <Button
            component={Link} 
            to="/contacto"
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
          >
            Test
          </Button>
          <Button
            component={Link} 
            to="/"
            variant="contained"
            color="secondary"
            sx={{ marginRight: 2 }}
          >
            Salir
          </Button>
        </div>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 3, paddingTop: 12 }}>
          Bienvenido a Endpoints
        </Typography>
        <ParrafoMensaje mensaje={titulo} />
        <ParrafoMensaje mensaje={parrafo} />
        <ParrafoMensaje mensaje={titulo2} />
        <ParrafoMensaje mensaje={parrafo2} />
        <ParrafoMensaje mensaje={parrafo3} />
      </div>
    </>
  );
}
