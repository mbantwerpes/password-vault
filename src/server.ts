import express from 'express';
import { readCredentials, findCredential } from './utils/credentials';

const app = express();
const port = 3000;

app.get('/api/credentials', async (_request, response) => {
  const credentials = await readCredentials();
  response.status(200).json(credentials);
});

app.get('/api/credentials/:service', async (request, response) => {
  const credential = await findCredential(request.params.service);
  response.send(credential);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
