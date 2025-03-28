import * as React from 'react'
import { useState } from 'react'
import InputGuardar from './components/InputGuardar'
import Footer from './components/footer'
import Contacto from "./pages/contacto"

import Dashboard from "./pages/dashboard";
import Info from "./pages/info";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

import { Box } from "@mui/material";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputGuardar />} /> {/* Página de login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Página de dashboard */}
        <Route path="/info" element={<Info />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
