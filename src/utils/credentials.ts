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
  const credential = credentials.find(
    (credential) => credential.service.toLowerCase() === service.toLowerCase()
  );
  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }
  return credential;
};
