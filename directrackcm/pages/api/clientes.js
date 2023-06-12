import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const clienteData = req.body;

      // Realizar la solicitud POST a tu backend utilizando Axios
      const response = await axios.post('URL_DE_TU_BACKEND', clienteData);

      console.log('Cliente guardado en la base de datos con éxito');
      res.status(200).json({ message: 'Cliente guardado en la base de datos' });
    } catch (error) {
      console.error('Error al guardar el cliente en la base de datos:', error);
      res.status(500).json({ message: 'Error al guardar el cliente en la base de datos' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
