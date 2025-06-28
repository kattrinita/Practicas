import React from 'react';
import { AppBar, Toolbar, Box, Link, Grid, useMediaQuery } from '@mui/material';

export default function Header() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
         
        <Grid container alignItems="center">
          {/* XS=Celular --> 4 columnas SM=Compu --> 3 columnas */}
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
                <Link href="index.html" underline="none" sx={navLinkStyle}>
                  Inicio
                </Link>
                <Link href="#secciones" underline="none" sx={navLinkStyle}>
                  Secciones
                </Link>
                <Link href="#contactanos" underline="none" sx={navLinkStyle}>
                  Contacto
                </Link>
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
