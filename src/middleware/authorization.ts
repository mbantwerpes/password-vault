import { validateMasterPassword } from '../utils/validation';
import { Request, Response, NextFunction } from 'express';

export const isAuthorized = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const masterPassword = req.headers.authorization;
  if (!masterPassword) {
    res.status(401).send('Unauthorized');
    return;
  }
  if (await validateMasterPassword(masterPassword)) {
    res.locals.masterPassword = masterPassword;
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
