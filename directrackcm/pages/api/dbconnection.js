import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

let client;

if (process.env.NODE_ENV === 'development') {
  // En modo de desarrollo, conecta al cliente MongoDB directamente
  client = new MongoClient(uri);
} else {
  // En modo de producción, realiza la conexión una vez y exporta la promesa resuelta
  client = new MongoClient(uri);
  client.connect().then(() => {
    console.log('Connected to MongoDB Atlas');
  });
}

export default client;
