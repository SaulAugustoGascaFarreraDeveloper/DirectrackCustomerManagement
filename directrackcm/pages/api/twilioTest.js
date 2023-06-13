import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {to,message } = req.body;

    try {
      const accountSid = 'AC8f287a7fa121323025068c3d3551db6a';
      const authToken = '6d00b5a62230325bd07c55cd7746f388';
      const client = twilio(accountSid, authToken);

      const twilioResponse = await client.messages.create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+521${to}`
      });

      res.status(201).json({ success: true, message: 'Mensaje enviado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al enviar el mensaje' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Método no válido' });
  }
}
