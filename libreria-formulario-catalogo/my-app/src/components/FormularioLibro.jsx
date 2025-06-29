import { useState } from 'react';

export default function FormularioLibro({ onAgregarLibro }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !autor || !precio) {
      alert('Por favor completa al menos título, autor y precio.');
      return;
    }

    onAgregarLibro({
      titulo,
      autor,
      categoria,
      descripcion,
      precio,
 
    });

    setTitulo('');
    setAutor('');
    setCategoria('');
    setDescripcion('');
    setPrecio('');

  };

  return (
    <form onSubmit={handleSubmit} className="form-contacto">
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="autor">Autor</label>
        <input
          id="autor"
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoria">Categoría</label>
        <input
          id="categoria"
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input
          id="precio"
          type="text"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>


      <button type="submit" className="btn-primary">Agregar Libro</button>
    </form>
  );
}

