import { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material';

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
    <Box id="contactanos" sx={{ backgroundColor: '#FEECC4', padding: 4 }}>
      <Grid container spacing={4}>
        {/* Columna izquierda*/}
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#0A3359', marginBottom: 2 }}>
            ¿Querés hablar con nosotros?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: '#0A3359' }}>
            Ya sea para consultar sobre disponibilidad de libros, recomendar una lectura o hacer un pedido especial.
            Completá el formulario y te responderemos lo antes posible.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, fontSize: '1.5rem', color: '#0A3359', marginBottom: 2 }}>
            <a href="#!" aria-label="Teléfono">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="#!" aria-label="Gmail">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Box>

          <Box sx={{ border: 'none' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127169.97287575775!2d-42.82348027235274!3d-5.093734359805069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af1a339dbfebe75%3A0x97e641b466f6dde0!2sBookNest!5e0!3m2!1ses!2sar!4v1751095338852!5m2!1ses!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación BookNest"
            ></iframe>
          </Box>
        </Grid>

        {/* Columna derecha*/}
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: 2,
              backgroundColor: '#ffffff',
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                required
                label="Correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                required
                label="Mensaje"
                multiline
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                margin="normal"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: '#0A3359',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#062344',
                  },
                }}
              >
                Enviar mensaje
              </Button>

              {exito && (
                <Typography
                  variant="body2"
                  sx={{ marginTop: 2, color: 'green', fontWeight: 600 }}
                >
                  ¡Gracias! Tu mensaje ha sido enviado.
                </Typography>
              )}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


