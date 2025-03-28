import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
    return (
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            Mi Aplicación
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
    );
  }