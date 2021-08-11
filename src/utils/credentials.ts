import { readFile } from 'fs/promises';
import fs from 'fs';
import { DB, Credential } from '../types';

export const readCredentials = async (): Promise<Credential[]> => {
  try {
    const db: DB = await getDB();
    const credentials = db.credentials;
    return credentials;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
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

export const addCredential = async (
  credential: Credential
): Promise<boolean> => {
  const db: DB = await getDB();
  db.credentials = [...db.credentials, credential];
  return overwriteDB(db);
};

export const deleteCredential = async (service: string): Promise<boolean> => {
  const db: DB = await getDB();
  db.credentials = db.credentials.filter(
    (credential) => credential.service.toLowerCase() !== service.toLowerCase()
  );
  return overwriteDB(db);
};

const getDB = async (): Promise<DB> => {
  const response = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  return db;
};

const overwriteDB = (db: DB): boolean => {
  const dbString = JSON.stringify(db, null, 2);
  fs.writeFile('src/db.json', dbString, (err: any) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
  return true;
};
