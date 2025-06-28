export default function Secciones() {
  return (
    <section id="secciones">
      <div className="tituloSecciones">
        <h2>Secciones</h2>
      </div>
      <div className="textoSecciones">
        <p>Hacé clic en una sección para ver los libros disponibles</p>
      </div>
      <div className="carrousel">
        <div className="conteCarrousel">
          <div className="itemCarrousel" id="item1">
            <div className="itemCarrouselTarjeta">
              <a href="novelas.html">
                <img src="/img/novelas.jpg" alt="Novelas" />
              </a>
            </div>
            <div className="flechas">
              <a href="#item4">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <a href="#item2">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="itemCarrousel" id="item2">
            <div className="itemCarrouselTarjeta">
              <a href="historia.html">
                <img src="/img/historia.jpg" alt="Historia" />
              </a>
            </div>
            <div className="flechas">
              <a href="#item1">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <a href="#item3">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="itemCarrousel" id="item3">
            <div className="itemCarrouselTarjeta">
              <a href="ciencia.html">
                <img src="/img/ciencia.jpg" alt="Ciencia" />
              </a>
            </div>
            <div className="flechas">
              <a href="#item2">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <a href="#item4">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="itemCarrousel" id="item4">
            <div className="itemCarrouselTarjeta">
              <a href="infantil.html">
                <img src="/img/infantil.jpg" alt="Infantil" />
              </a>
            </div>
            <div className="flechas">
              <a href="#item3">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <a href="#item1">
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
