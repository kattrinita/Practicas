import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import HeroBanner from './components/Hero-banner.jsx';
import Contactanos from './components/Contactanos.jsx';

import Catalogo from './pages/Catalogo.jsx';
import FormularioLibro from './components/FormularioLibro.jsx';
import './assets/styles.css'; 

function App() {
  const [libros, setLibros] = useState([
    {
      id: 1,
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      categoria: 'Infantil',
      descripcion: 'Un cuento poético y filosófico sobre un joven príncipe y su viaje por el universo.',
      precio: 15000,
      imagen: '/img/elPrincipito.jpg',
    },
    {
      id: 2,
      titulo: 'Harry Potter y la piedra filosofal',
      autor: 'J.K. Rowling',
      categoria: 'Infantil',
      descripcion: 'Inicio de la saga mágica más famosa, llena de aventuras en Hogwarts.',
      precio: 20000,
      imagen: '/img/infantil1.jpeg',
    },
  ]);

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, { ...nuevoLibro, id: Date.now() }]);
  };

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <Contactanos />
              </>
            }
          />
          <Route path="/catalogo" element={<Catalogo libros={libros} />} />
          <Route path="/agregar" element={<FormularioLibro onAgregarLibro={agregarLibro} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
