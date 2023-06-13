import axios from 'axios';

const sendEmail = async () => {
  try {
    const response = await axios.post('/api/sendEmail', {
      to: ['sgfarrera@gmail.com',"sgfaws@gmail.com","sgfarrera115@hotmail.com"],
      subject: 'Recordatorio Pago Directrack',
      text: 'Directarck te recuerda pagar tu suscripcion lo mas pronto posible'
    });

    console.log(response.data);
    // Manejar la respuesta de la API aquí

  } catch (error) {
    console.error(error);
    // Manejar errores aquí
  }
}

const EmailTestPage = () => {
  return (
    <div>
      <h1>Enviar correo electrónico de prueba</h1>
      <button onClick={sendEmail}>Enviar</button>
    </div>
  );
}

export default EmailTestPage;
