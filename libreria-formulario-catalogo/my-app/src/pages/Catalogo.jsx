import LibroCard from "../components/LibroCard";
import { useState } from "react";

export default function Catalogo({ libros }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const librosFiltrados = libros.filter(libro => {
    const coincideBusqueda = libro.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaFiltro === "" || libro.categoria === categoriaFiltro;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="catalogo" style={{ padding: '20px' }}>
      <div className="filtros" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar por título"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          style={{ padding: '5px' }}
        >
          <option value="">Todas las categorías</option>
          <option value="Infantil">Infantil</option>
          <option value="Novelas">Novelas</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Historia">Historia</option>
        </select>
      </div>

      <div id="libros-estilos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: '20px' }}>
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map(libro => <LibroCard key={libro.id} {...libro} />)
        ) : (
          <p>No se encontraron libros con ese criterio.</p>
        )}
      </div>
    </div>
  );
}
