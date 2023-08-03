import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { AuthProvaider } from './context/auth.context';
import Nosotros from './views/Nosotros';
import Home from './views/Home';
import './App.css'

function App() {

  return (
    <AuthProvaider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        </Routes>

    </AuthProvaider>
  )
}

export default App
