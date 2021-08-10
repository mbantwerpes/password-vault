import express from 'express';
import { readCredentials } from './utils/credentials';

const app = express();
const port = 3000;

app.get('/', (_request, response) => {
  response.send('Hello World!');
});

app.get('/credentials', async (_request, response) => {
  response.send(await readCredentials());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
