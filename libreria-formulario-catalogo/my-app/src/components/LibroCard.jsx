export default function LibroCard({ titulo, autor, categoria, descripcion, precio, imagen }) {
  return (
    <div className="libro" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <img src={imagen} alt={titulo} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
      <h4 style={{ margin: '10px 0 5px' }}>{titulo}</h4>
      <p><strong>Autor:</strong> {autor}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p style={{ flexGrow: 1 }}>{descripcion}</p>
      <p style={{ fontWeight: 'bold' }}>${precio}</p>
      <button style={{ backgroundColor: '#FEB01D', border: 'none', borderRadius: '20px', padding: '8px', cursor: 'pointer' }}>
        Comprar
      </button>
    </div>
  );
}


