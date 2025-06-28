import { useState } from 'react';

export default function Contactanos() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    setExito(true);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <section id="contactanos">
      <div className="texto-contacto">
        <h2>¿Querés hablar con nosotros?</h2>
        <p>
          Ya sea para consultar sobre disponibilidad de libros, recomendar una
          lectura o hacer un pedido especial. Completá el formulario y te
          responderemos lo antes posible.
        </p>

        <a href="#!" aria-label="Celular">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="#!" aria-label="Gmail">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127169.97287575775!2d-42.82348027235274!3d-5.093734359805069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af1a339dbfebe75%3A0x97e641b466f6dde0!2sBookNest!5e0!3m2!1ses!2sar!4v1751095338852!5m2!1ses!2sar" 
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <form id="form-contacto" className="form-contacto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@dominio.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar mensaje
        </button>

        {exito && (
          <p id="mensaje-exito" className="mensaje-exito">
            ¡Gracias! Tu mensaje ha sido enviado.
          </p>
        )}
      </form>
    </section>
  );
}
