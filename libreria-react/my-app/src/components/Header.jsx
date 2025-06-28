export default function Header() {
  return (
    <header>
      <img id="logo" src="/img/logolibreria.png" alt="Logo de la Libreria" />
      
      <nav>
        <a href="index.html">Inicio</a>
        <a href="#secciones">Secciones</a>
        <a href="#contactanos">Contacto</a>
      </nav>

      <div id="loginBoton">
        <a href="login.html">
          <button>Log in</button>
        </a>
      </div>
    </header>
  );
}