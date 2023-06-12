import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem } from '@mui/material';
const connectDB = require('../../db/db');
import axios from "axios"


const FormularioCliente = () => {


  
  const [cliente, setCliente] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    matricula: '',
    suscripcion: '',
    telefono: '',
    correo: '',
    fechaPago: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del cliente a tu backend o base de datos
    //console.log(cliente);





    try{


      const response = await axios.post('/api/posts', cliente);

      // Verifica la respuesta de la API
      if (response.status === 201) {
        console.log('Cliente guardado en la base de datos con éxito');
      } else {
        console.error('Error al guardar el cliente en la base de datos');
      }
       

        // Restablecer el formulario
        setCliente({
          nombre: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          matricula: '',
          suscripcion: '',
          telefono: '',
          correo: '',
          fechaPago: '',
        });

    }catch (error) {
      console.error('Error al guardar el cliente en la base de datos:', error);
    }


    
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre"
            name="nombre"
            value={cliente.nombre}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido Paterno"
            name="apellidoPaterno"
            value={cliente.apellidoPaterno}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Apellido Materno"
            name="apellidoMaterno"
            value={cliente.apellidoMaterno}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Matrícula"
            name="matricula"
            value={cliente.matricula}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Teléfono"
            name="telefono"
            value={cliente.telefono}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Correo"
            name="correo"
            value={cliente.correo}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Pago"
            name="fechaPago"
            value={cliente.fechaPago}
            onChange={handleChange}
            type="datetime-local"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            label="Suscripción"
            name="suscripcion"
            value={cliente.suscripcion}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="">Seleccione una opción</MenuItem>
            <MenuItem value="1 Mes">1 Mes</MenuItem>
            <MenuItem value="2 Meses">2 Meses</MenuItem>
            <MenuItem value="12 Meses">12 Meses</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormularioCliente;
