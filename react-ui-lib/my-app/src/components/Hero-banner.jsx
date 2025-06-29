import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';

export default function HeroBanner() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      component="section"
      id="hero-banner"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEECC4',
        py: 6,
        px: 2,
        gap: 4,
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
    
      <Box
        id="hero-texto"
        sx={{
          flex: '1 1 300px',
          color: '#0A3359',
          
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"} component="h1" sx={{ fontWeight: 800 }}>
          ¡Leé más por menos!
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"} sx={{ fontWeight: 400 }}>
          Los libros que amás con precios que también vas a amar
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="contained"
            href="#!"
            sx={{
             
              cursor: 'pointer',
              backgroundColor: '#FEB01D',
              color: '#0A3359',
              fontSize: '12px',
              fontWeight: 700,
              borderRadius: '20px',
              width: '112px',
              height: '32px',
              border: 'none',
              textTransform: 'none',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            Ver Ofertas
          </Button>
        </Box>
      </Box>

   
      <Box
        component="img"
        id="hero-imagen"
        src="/img/hero.png"
        alt="Estanteria de libros "
        sx={{
          flex: '1 1 300px',
          maxWidth: '400px',
          width: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}
