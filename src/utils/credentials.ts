import { readFile } from 'fs/promises';
import { DB, Credential } from '../types';

export const readCredentials = async (): Promise<Credential[]> => {
  const response: string = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials: Credential[] = db.credentials;
  return credentials;
};
