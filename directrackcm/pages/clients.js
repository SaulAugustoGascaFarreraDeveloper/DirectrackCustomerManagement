import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

function ClientsPage({ user }) {
//   const router = useRouter();

//   if (!user.roles.includes('admin')) {
//     // El usuario no tiene el rol de administrador, redirigir o mostrar un mensaje de error
//     return <div>No tienes permisos suficientes para acceder a esta página.</div>;
//   }

  return <h1>Página de clientes</h1>;
}

//export const getServerSideProps = withPageAuthRequired();

export default ClientsPage;
