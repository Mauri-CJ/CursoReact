import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'


export const RegisterPage = () => {
  return (
    <AuthLayout title='Login'>
       <form >
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label ="Nombre completo"
                type="text"
                placeholder = 'Nombre completo'
                fullWidth
                >
              </TextField>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label ="Correo"
                type="email"
                placeholder = 'correo@gmail.com'
                fullWidth
                >
              </TextField>
            </Grid>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label ="Contraseña"
                type="password"
                placeholder = 'contraseña'
                fullWidth
                >
              </TextField>
            </Grid>

            <Grid container spacing={2} sx={{mt:1}}>
              <Grid item xs={12} sm = {6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm = {6}>
                <Button variant='contained' fullWidth>
                  <Google/>
                   <Typography sx={{ml:1}}> Google </Typography> 
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}> ¿Ya tienes cuenta? </Typography>
              <Link component = {RouterLink} color='inherit' to="/auth/login">Ingresar</Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>

  )
}