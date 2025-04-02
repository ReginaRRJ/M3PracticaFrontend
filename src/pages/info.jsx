import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ParrafoMensaje from "./../components/Texto";
import Subtitulo from "./../components/Subtitulo";

export default function Info() {
  const sub="1. Componentes de un Endpoint en HTTPS"
  const sub2="2. Métodos HTTP Usados en Endpoints"
  const sub3="3. Seguridad en Endpoints con HTTPS"
  const tema1="Desglose de la estructura:"
  const tema14="https://api.ejemplo.com/v1/usuarios/123?activo=true"
  const tema11="Protocolo (https://) -> Indica que la comunicación es segura mediante cifrado TLS/SSL."
  const tema12="Dominio (api.ejemplo.com) -> Servidor donde está alojada la API. Puede incluir un subdominio (api)."
  const tema13="Versión (/v1/) -> Algunas APIs incluyen versiones en la ruta para gestionar cambios en el tiempo."
  const tema2="Cada endpoint responde a un método HTTP, que define la acción que se realizará en el servidor:"
  const tema21="GET -> Obtiene datos del servidor.	-> GET /usuarios/ → Devuelve la lista de usuarios."
  const tema22="POST -> Envía datos para crear un recurso nuevo.	-> POST /usuarios/ → Crea un nuevo usuario."
  const tema23="PUT -> Actualiza un recurso existente.	-> PUT /usuarios/123 → Modifica el usuario con ID 123."
  const tema24="PATCH -> Modifica parcialmente un recurso.	-> PATCH /usuarios/123 → Cambia solo algunos datos del usuario."
  const tema3="El protocolo HTTPS cifra la comunicación entre el cliente (tu aplicación) y el servidor, lo que evita ataques como Man-in-the-Middle (MITM)."

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
        <Typography variant="h4" sx={{ textAlign: "center", mt: 3 }}>Página de Información</Typography>

        <Subtitulo mensaje={sub}></Subtitulo>
        <ParrafoMensaje mensaje={tema1}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema14}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema11}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema12}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema13}></ParrafoMensaje>
        <Subtitulo mensaje={sub2}></Subtitulo>
        <ParrafoMensaje mensaje={tema2}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema21}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema22}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema23}></ParrafoMensaje>
        <ParrafoMensaje mensaje={tema24}></ParrafoMensaje>
        <Subtitulo mensaje={sub3}></Subtitulo>
        <ParrafoMensaje mensaje={tema3}></ParrafoMensaje>
      </div>
    </>
  );
}