import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
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

  return (
    <>
      <h1>Página de inicio</h1>
      <div>
        {!!user ? (
          <>
            <div>¡Bienvenido, {user.name}!</div>
            <Link href="/api/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </>
  );
}


//export const getServerSideProps = withPageAuthRequired();
