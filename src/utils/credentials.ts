import { readFile, writeFile } from 'fs/promises';
import { DB, Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';

export const readCredentials = async (
  masterPassword: string
): Promise<Credential[]> => {
  try {
    const db: DB = await getDB();
    const credentials = db.credentials;
    const decryptedCredentials = credentials.map((credential) => {
      return (credential = decryptCredential(credential, masterPassword));
    });
    return decryptedCredentials;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export const findCredential = async (
  service: string,
  masterPassword: string
): Promise<Credential> => {
  // This already delivers the password decrypted, so no need to decrypt here again
  const credentials = await readCredentials(masterPassword);
  const credential = credentials.find(
    (credential) => credential.service.toLowerCase() === service.toLowerCase()
  );
  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }
  return credential;
};

export const addCredential = async (
  credential: Credential,
  masterPassword: string
): Promise<void> => {
  const db: DB = await getDB();
  const newCredential = encryptCredential(credential, masterPassword);
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
  newCredential: Credential,
  masterPassword: string
): Promise<void> => {
  const db: DB = await getDB();
  const encrptedCredential = encryptCredential(newCredential, masterPassword);
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
