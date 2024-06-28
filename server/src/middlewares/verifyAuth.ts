import { RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import config from '../config';
import CustomError from '../errorHandler/customError';

const verifyAuth: RequestHandler = (req, _res, next) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.split(' ')[1];

    if (token) {
      try {
        const decode = jwt.verify(token, config.JWT_ACCESS_SECRET as string) as JwtPayload;

        req.user = {
          _id: decode?._id,
          email: decode?.email
        };

        next();
      } catch (error) {
        throw new CustomError(httpStatus.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
      }
    } else {
      throw new CustomError(httpStatus.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
    }
  } else {
    throw new CustomError(httpStatus.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
  }
};

export default verifyAuth;