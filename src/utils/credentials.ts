import { ObjectId } from 'mongodb';
import type { Credential } from '../types';
import { decryptCredential, encryptCredential } from './crypto';
import { getCredentialCollection } from './database';

export async function readCredentials(key: string): Promise<Credential[]> {
  const credentialCollection = getCredentialCollection();
  const encryptedCredentials = await credentialCollection.find().toArray();
  const credentials = encryptedCredentials.map((credential) =>
    decryptCredential(credential, key)
  );
  return credentials;
}

export async function getCredential(
  service: string,
  key: string
): Promise<Credential> {
  const credentialCollection = getCredentialCollection();
  const encryptedCredential = await credentialCollection.findOne({ service });

  if (!encryptedCredential) {
    throw new Error(`Unable to find service ${service}`);
  }

  const credential = decryptCredential(encryptedCredential, key);
  return credential;
}

export async function addCredential(
  credential: Credential,
  key: string
): Promise<ObjectId> {
  const credentialCollection = getCredentialCollection();

  const encryptedCredential = encryptCredential(credential, key);

  const result = await credentialCollection.insertOne(encryptedCredential);
  return result.insertedId;
}

export async function deleteCredential(serviceId: string): Promise<void> {
  const credentialCollection = getCredentialCollection();
  await credentialCollection.deleteOne({
    _id: new ObjectId(serviceId),
  });
}

export async function updateCredential(
  serviceId: string,
  credential: Credential,
  key: string
): Promise<void> {
  console.log(serviceId);
  const credentialCollection = getCredentialCollection();

  const encryptedCredential = encryptCredential(credential, key);

  await credentialCollection.updateOne(
    { _id: new ObjectId(serviceId) },
    { $set: encryptedCredential }
  );
}
