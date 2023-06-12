import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import connectDB from "../db/db"
import TestDB from './testdb';
import ClientsPage from './clients';

const Home = () => {

  const { user, isLoading, error } = useUser();
  const router = useRouter();
  

   // Redirigir al usuario si no está autenticado
   if (!user && !isLoading) {
    router.push('/api/auth/login');
    return null;
  }

  // Redirigir al usuario si no tiene el rol de administrador
  if (user && !user['http://localhost:3000/roles'].includes('admin')) {
    router.push('/unauthorized');
    return null;
  }

  const handleTestDB =  () => {
    //await connectDB(); // Realizar conexión a la base de datos
    router.push('/testdb'); // Redirigir después de la conexión exitosa
  };

  return (
    <>
      <h1>Página de inicio</h1>
      
              {!!user ? (

              <>

                    {/* <div>
                      <button onClick={handleTestDB}>TEST DB</button>
                    </div> */}
                    <ClientsPage user={user} />

              </>





              ) : (<Link href="/api/auth/login">Login</Link>)}


              {/* <Link href="/testdb">TEST DB</Link> */}

  </>
  );
}


export default Home