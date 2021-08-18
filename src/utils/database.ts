import { Collection, MongoClient } from 'mongodb';
import { Credential } from '../types';

let client: MongoClient;

export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url);
  await client.connect();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getCredentialCollection = (): Collection<Credential> => {
  return getCollection<Credential>('credentials');
};
