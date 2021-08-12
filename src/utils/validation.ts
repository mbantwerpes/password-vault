import CryptoJS from 'crypto-js';
import { readFile } from 'fs/promises';

export const validateMasterPassword = async (
  password: string
): Promise<boolean> => {
  const hash = CryptoJS.SHA256(password).toString();
  const response = await readFile('.password', 'utf-8');
  return hash === response;
};
