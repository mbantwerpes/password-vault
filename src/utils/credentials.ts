import { readFile } from 'fs/promises';
import { DB, Credential } from '../types';

export const readCredentials = async (): Promise<Credential[]> => {
  const response = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  const credentials = db.credentials;
  return credentials;
};

export const findCredential = async (service: string): Promise<Credential> => {
  const credentials = await readCredentials();
  const filtered = credentials.filter(
    (credential) => credential.service.toLowerCase() === service.toLowerCase()
  );
  return filtered[0];
};
