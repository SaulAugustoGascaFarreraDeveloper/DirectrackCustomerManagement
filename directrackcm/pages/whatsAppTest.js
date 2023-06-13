import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const WhatsAppComponent = () => {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSend = async () => {
    setLoading(true);

    try {
      const response = await axios.post('/api/twilioTest', {to,message});
      setResponse(response.data);
    } catch (error) {
      console.error(error);
      setResponse({ success: false, message: 'Error al enviar el mensaje' });
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Enviar mensaje de prueba por WhatsApp</h1>
      <div>
        <label htmlFor="to">Destinatario:</label>
        <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button onClick={handleSend} disabled={loading}>
        Enviar
      </button>
      {response && (
        <div>
          <p>{response.message}</p>
        </div>
      )}
      <br/>
      <Link href="/clients">Volver...</Link>
    </div>
  );
};

export default WhatsAppComponent;

