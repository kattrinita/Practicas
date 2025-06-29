import React from 'react';
import { AppBar, Toolbar, Box, Link as MuiLink, Grid, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';  // Importamos Link de React Router

export default function Header() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Box
              component="img"
              src="/img/logolibreria.png"
              alt="Logo"
              sx={{ height: 63, objectFit: 'contain' }}
            />
          </Grid>

          {!isMobile && (
            <Grid item sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* Usamos MuiLink pero con component={RouterLink} para que funcione React Router */}
                <MuiLink component={RouterLink} to="/" underline="none" sx={navLinkStyle}>
                  Inicio
                </MuiLink>
                <MuiLink component={RouterLink} to="/catalogo" underline="none" sx={navLinkStyle}>
                  Catálogo
                </MuiLink>
                <MuiLink component={RouterLink} to="/agregar" underline="none" sx={navLinkStyle}>
                  Agregar Libro
                </MuiLink>
              </Box>
            </Grid>
          )}

          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="login.html">
              <button style={loginButtonStyle}>Log in</button>
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const navLinkStyle = {
  margin: '0 18px',
  fontSize: '16px',
  fontWeight: 600,
  color: '#0A3359',
  textDecoration: 'none',
};

const loginButtonStyle = {
  cursor: 'pointer',
  backgroundColor: '#0A3359',
  color: 'white',
  fontSize: '12px',
  fontWeight: 700,
  borderRadius: '20px',
  width: '112px',
  height: '32px',
  border: 'none',
};
