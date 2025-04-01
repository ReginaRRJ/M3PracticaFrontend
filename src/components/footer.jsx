//import * as React from 'react'
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: 2,
        color: "blue",
        position: "total",
        bottom: 0,
        width: "100%"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Regina Reyes - A01275790 6to ITC PRUEBAAS
      </Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} Regina Reyes - A01275790 6to ITC Prueba as prueba
      </Typography>
    </Box>
  );
}