//import { useState } from "react";
import { Button, Typography } from "@mui/material";
import BotonRojo from "./../components/BotonRojo"
import ParrafoMensaje from "./../components/Texto"
import { Link } from "react-router-dom";

export default function Login(//{ setLoggeado }

) {

  const pregunta1 = "El método GET en HTTP es para enviar datos.";
  const pregunta2 = "El Bearer Token no es un método de autorización.";
  const pregunta3 = "En JavaScript puedes utilizar fetch para hacer consultas a una API.";
  const pregunta4 = "Si el código nos devuelve un 404 quiere decir que el recurso no existe.";
  const pregunta5 = "Solo podemos recibir respuestas de tipo json";

  return (
    <>
      <div style={{ padding: 10}}>
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
        <Typography variant="h4" sx={{ textAlign: "center", mt: 3, paddingTop: 5 }}>
        Bienvenido al test!
        </Typography>
        <ParrafoMensaje mensaje={pregunta1}/>
        <BotonRojo valorVerde="Incorrecto"/>

        <ParrafoMensaje mensaje={pregunta2}/>
        <BotonRojo valorVerde="Incorrecto"/>

        <ParrafoMensaje mensaje={pregunta3}/>
        <BotonRojo valorVerde="Correcto"/>

        <ParrafoMensaje mensaje={pregunta4}/>
        <BotonRojo valorVerde="Correcto"/>

        <ParrafoMensaje mensaje={pregunta5}/>
        <BotonRojo valorVerde="Incorrecto"/>
      </div>
    </>
  );
}