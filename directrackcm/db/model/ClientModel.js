const mongoose = require('mongoose');

// Definición del esquema del cliente
const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
    required: true,
  },
  matricula: {
    type: String,
    required: true,
  },
  suscripcion: {
    type: String,
    enum: ['1 Mes', '2 Meses', '12 Meses'],
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  fechaPago: {
    type: Date,
    required: true,
  },
});

// Creación del modelo Cliente utilizando el esquema definido
// const Client = mongoose.model('Cliente', clienteSchema);

module.exports = mongoose.models.Cliente || mongoose.model("Cliente",clienteSchema) ;
