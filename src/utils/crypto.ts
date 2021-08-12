import CryptoJS from 'crypto-js';
import { Credential } from '../types';

export const encryptCredential = (credential: Credential): Credential => {
  const encryptedPassword = CryptoJS.TripleDES.encrypt(
    credential.password,
    'johndow'
  ).toString();

  const encryptedCredential = {
    ...credential,
    password: encryptedPassword,
  };

  return encryptedCredential;
};
