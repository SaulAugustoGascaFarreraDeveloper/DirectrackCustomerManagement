import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PersistentDrawerLeft from '../components/UI/drawerLeft';
import FormularioCliente from '../components/app/insertClient';
import connectDB from "../db/db"

function ClientsPage({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [conexion, setConexion] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        await connectDB();
        console.log('Conexión exitosa a MongoDB');
        setConexion(true);
      } catch (error) {
        console.log('Error de conexión a MongoDB:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log("USER CLIENT ->> ", user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!!user ? (
        <>
          {/* <Link style={{color:'black'}} href="/api/auth/logout">Logout</Link>
          <div>
            {conexion ? (
              <div>CONEXION EXITOSA</div>
            ) : (
              <div>CONEXION FALLIDA</div>
            )}
          </div> */}

          <PersistentDrawerLeft/>

             

        </>
      ) : (

        <>

          <Link href="/api/auth/logout">Logout</Link>
          <div>Algo salió mal</div>
        
        </>
       
      )}

      
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = await getSession(context.req, context.res);
    return {
      props: {
        user: session?.user || null,
      },
    };
  },
});

export default ClientsPage;