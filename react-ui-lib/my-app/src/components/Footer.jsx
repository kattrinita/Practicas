import React from 'react';
import { Box, Container, Typography, Link, Grid, useMediaQuery } from '@mui/material';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box component="footer" sx={{ backgroundColor: '#0A3359', py: 6, mt: 4, color: '#FFFFFF' }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          justifyContent="space-between"
          textAlign={isMobile ? 'center' : 'left'}
        >
      
          <Grid item xs={12} sm="auto">
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              &copy; 2025 BookNest. Todos los derechos reservados.
            </Typography>
          </Grid>

   
          <Grid item xs={12} sm="auto" sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', gap: 3, fontSize: '1.5rem' }}>
            <Link href="#!" aria-label="Instagram" color="inherit">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="#!" aria-label="Facebook" color="inherit">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="#!" aria-label="Twitter" color="inherit">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </Grid>

       
          <Grid item xs={12} sm="auto" sx={{ fontSize: '14px' }}>
            <Link href="#!" sx={{ color: '#FFFFFF', textDecoration: 'none' }}>
              Términos y condiciones
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
