/**
 * npm i jsonwebtoken
 * npm i @types/jsonwebtoken
 */

import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
export function generateJWT(jwtPayload: JwtPayload): string {
  const privateKey = process.env.JWT_SECRET as string;

  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: "30d",
  });

  return token;
}

// import { sign, JwtPayload } from "jsonwebtoken";

// export function generateJWT(jwtPayload: JwtPayload): string {
//   const privateKey = process.env.JWT_SECRET as string;

//   // التأكد من أن privateKey موجود
//   if (!privateKey) {
//     throw new Error("JWT secret is not defined in environment variables.");
//   }

//   const token = sign(jwtPayload, privateKey, {
//     expiresIn: "30d",
//   });

//   return token;
// }
