import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HeroBanner from './components/Hero-banner.jsx'
import Secciones from './components/Secciones.jsx'
import Contactanos from './components/Contactanos.jsx'

import './styles.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Secciones />
        <Contactanos />
      </main>
      <Footer />
    </>
  );
}

export default App;

