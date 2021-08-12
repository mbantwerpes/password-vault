import { readFile, writeFile } from 'fs/promises';
import { DB, Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';

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
  console.log(decryptCredential(credential));
  return credential;
};

export const addCredential = async (credential: Credential): Promise<void> => {
  const db: DB = await getDB();
  const newCredential = encryptCredential(credential);
  db.credentials = [...db.credentials, newCredential];
  return overwriteDB(db);
};

export const deleteCredential = async (service: string): Promise<void> => {
  const db: DB = await getDB();
  db.credentials = db.credentials.filter(
    (credential) => credential.service.toLowerCase() !== service.toLowerCase()
  );
  return overwriteDB(db);
};

export const updateCredential = async (
  service: string,
  newCredential: Credential
): Promise<void> => {
  const db: DB = await getDB();
  const encrptedCredential = encryptCredential(newCredential);
  db.credentials = db.credentials.map((credential) => {
    if (credential.service.toLowerCase() === service.toLowerCase()) {
      credential = encrptedCredential;
    }
    return credential;
  });
  return await overwriteDB(db);
};

const getDB = async (): Promise<DB> => {
  const response = await readFile('src/db.json', 'utf-8');
  const db: DB = JSON.parse(response);
  return db;
};

const overwriteDB = async (db: DB): Promise<void> => {
  const dbString = JSON.stringify(db, null, 2);
  await writeFile('src/db.json', dbString);
};
