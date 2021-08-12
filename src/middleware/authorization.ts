import { validateMasterPassword } from '../utils/validation';

export const isAuthorized = async (req: any, res: any, next: any) => {
  if (await validateMasterPassword('123')) {
    next();
  } else {
    res.send(401, 'Unauthorized');
  }
};
