import express from 'express';
import {
  readCredentials,
  findCredential,
  addCredential,
  deleteCredential,
  updateCredential,
} from './utils/credentials';
import { isAuthorized } from './middleware/authorization';

const app = express();
const port = 3000;

app.use(express.json());
app.use(isAuthorized);

app.get('/api/credentials', async (_request, response) => {
  try {
    const credentials = await readCredentials();
    response.status(200).json(credentials);
  } catch (error) {
    console.error(error);
    response.status(500).send(`Internal server error`);
  }
});

app.get('/api/credentials/:service', async (request, response) => {
  const urlParameter = request.params.service;
  try {
    const credential = await findCredential(urlParameter);
    response.status(200).json(credential);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find service: ${urlParameter}`);
  }
});

app.post('/api/credentials', async (request, response) => {
  const credential = request.body;
  await addCredential(credential);
  response.status(200).send(request.body);
});

app.put('/api/credentials/:service', async (request, response) => {
  const urlParameter = request.params.service;
  await updateCredential(urlParameter, request.body);
  response.status(200).send(request.body);
});

app.delete('/api/credentials/:service', async (request, response) => {
  const urlParameter = request.params.service;
  deleteCredential(urlParameter);
  response.status(200).send();
});

app.listen(port, () => {
  console.log(`Servier listening at http://localhost:${port}`);
});
