import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import {
  readCredentials,
  getCredential,
  addCredential,
  deleteCredential,
  updateCredential,
} from './utils/credentials';
import { isAuthorized } from './middleware/authorization';
import { connectDatabase } from './utils/database';

if (!process.env.MONGO_DB_URL) {
  throw new Error('No MONGO_DB_URL env variable');
}

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());
app.use(isAuthorized);

app.get('/api/credentials', async (_request, response) => {
  try {
    const masterPassword = response.locals.masterPassword;
    const credentials = await readCredentials(masterPassword);
    response.status(200).json(credentials);
  } catch (error) {
    console.error(error);
    response.status(500).send(`Internal server error`);
  }
});

app.get('/api/credentials/:service', async (request, response) => {
  const masterPassword = response.locals.masterPassword;
  const urlParameter = request.params.service;
  try {
    const credential = await getCredential(urlParameter, masterPassword);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find service: ${urlParameter}`);
  }
});

app.post('/api/credentials', async (request, response) => {
  const masterPassword = response.locals.masterPassword;
  const credential = request.body;
  await addCredential(credential, masterPassword);
  response.status(200).send(request.body);
});

app.put('/api/credentials/:service', async (request, response) => {
  const masterPassword = response.locals.masterPassword;
  const urlParameter = request.params.service;
  await updateCredential(urlParameter, request.body, masterPassword);
  response.status(200).send(request.body);
});

app.delete('/api/credentials/:serviceId', async (request, response) => {
  const urlParameter = request.params.serviceId;
  deleteCredential(urlParameter);
  response.status(200).send();
});

connectDatabase(process.env.MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
});
