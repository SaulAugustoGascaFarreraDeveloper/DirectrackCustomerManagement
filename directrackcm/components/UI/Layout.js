import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PersistentDrawerLeft from './drawerLeft';
import connectDB from "../db/db"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [conexion, setConexion] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {conexion ? (
        <div>CONEXION EXITOSA</div>
      ) : (
        <div>CONEXION FALLIDA</div>
      )}

      {!!router.query.user && (
        <div>
          <Link style={{color:'black'}} href="/api/auth/logout">Logout</Link>
        </div>
      )}

      <PersistentDrawerLeft />

      {children}
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Layout;
