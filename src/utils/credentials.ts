import { Credential } from '../types';
import { encryptCredential, decryptCredential } from './crypto';
import { getCredentialCollection } from './database';

export const readCredentials = async (
  masterPassword: string
): Promise<Credential[]> => {
  try {
    const collection = getCredentialCollection();
    const credentials = await collection.find().toArray();

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
  const collection = getCredentialCollection();
  const credential = await collection.findOne({ service });

  if (!credential) {
    throw new Error(`No credential found for service: ${service}`);
  }

  return decryptCredential(credential, masterPassword);
};

export const addCredential = async (
  credential: Credential,
  masterPassword: string
): Promise<void> => {
  const collection = getCredentialCollection();
  const newCredential = encryptCredential(credential, masterPassword);
  collection.insertOne(newCredential);
};

export const deleteCredential = async (service: string): Promise<void> => {
  const collection = getCredentialCollection();
  collection.findOneAndDelete({ service });
};

export const updateCredential = async (
  service: string,
  newCredential: Credential,
  masterPassword: string
): Promise<void> => {
  const encrptedCredential = encryptCredential(newCredential, masterPassword);
  const collection = getCredentialCollection();
  collection.findOneAndReplace({ service }, encrptedCredential);
};
