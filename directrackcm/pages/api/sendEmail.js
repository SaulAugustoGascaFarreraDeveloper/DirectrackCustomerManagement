import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Configuración del transportador de correo
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Establece true si tu servidor SMTP requiere SSL/TLS
        auth: {
          user: 'sgfarreradev@gmail.com',
          pass: 'gamjcwoykcgfilqr'
        }
      });

      // Datos del correo electrónico
      const { to, subject, text } = req.body;

      // Configuración del mensaje
      const message = {
        from: 'sgfarreradev@gmail.com',
        to,
        subject,
        text
      };

      // Envía el correo electrónico
      const info = await transporter.sendMail(message);

      res.status(200).json({ success: true, message: 'Correo electrónico enviado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo electrónico' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Método no válido' });
  }
}
