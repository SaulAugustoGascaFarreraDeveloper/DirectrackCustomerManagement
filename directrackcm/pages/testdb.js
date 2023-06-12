import React, { useEffect, useState } from 'react';
import  connectDB  from '../db/db';

const TestDB = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [conexion, setConexion] = useState(false);

  useEffect( () => {
    setIsLoading(true);
  
    async function fetchData() {
      try {
        await connectDB(); // Espera a que se complete la conexión
        console.log('Conexión exitosa a MongoDB');
        setConexion(true);
      } catch (error) {
        console.log('Error de conexión a MongoDB:', error);
        setConexion(false);
      } finally {
        setIsLoading(false);
      }
    }

     fetchData();
  }, []);

  if (isLoading) {
    return (
    <div>Loading...</div>
    
    )
  }

  return (
    <>
      <div>
        {conexion ? (
          <div>CONEXION EXITOSA</div>
        ) : (
          <div>CONEXION FALLIDA</div>
        )}
        HOLA TEST DB
      </div>
    </>
  );
};

export default TestDB;