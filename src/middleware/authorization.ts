import { validateMasterPassword } from '../utils/validation';

export const isAuthorized = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  const masterPassword = req.headers.authorization;
  if (await validateMasterPassword(masterPassword)) {
    res.locals.masterPassword = masterPassword;
    next();
  } else {
    res.send(401, 'Unauthorized');
  }
};
