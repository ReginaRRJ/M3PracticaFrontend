//import * as React from 'react'
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { blue, grey, red } from '@mui/material/colors';

export default function InputGuardar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Profesor" && password === "Profesor") {
      setMensaje("Login exitoso");
      navigate("/dashboard"); // Redirige a la página 'dashboard' después de iniciar sesión
    } else {
      setMensaje("Credenciales incorrectas.");
    }
  };

  return (
    <Box component="InputGuardar" sx={{ textAlign: "center", mt: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ mt: 5, paddingTop: 12, paddingBottom: 0 }}>
          Bienvenido
        </Typography>
        <Typography variant="h6" sx={{ mt: 5, paddingTop: 0, paddingBottom: 4 }}>
          Inicia sesión
        </Typography>
        <Typography variant="h12" sx={{ mt: 5, paddingTop: 0 }}>
          Contraseña y usuario: Profesor
        </Typography>
      </Box>

      <TextField
        label="Usuario"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <br />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2, width: "300px" }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
      <Typography variant="h6" sx={{ mt: 2, color: 'red', fontSize: '0.9rem' }}>
        {mensaje && mensaje}
      </Typography>
    </Box>
  );
}
