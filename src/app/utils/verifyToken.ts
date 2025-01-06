// import jwt from "jsonwebtoken";
// import { JWTPayload } from "./types";

// export default function verifyToken(token: string | null): JWTPayload | null {
//   try {
//     if (!token) {
//       return null;
//     }

//     const privateKey = process.env.NODE_ENV as string;
//     const userPayload = jwt.verify(token, privateKey) as JWTPayload;
//     return userPayload;
//   } catch (error) {
//     return null;
//   }
// }

import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";

export default function verifyToken(token: string | null): JWTPayload | null {
  try {
    if (!token) {
      return null;
    }

    const privateKey = process.env.JWT_SECRET || "default_secret"; // استخدم مفتاح سري صحيح
    const userPayload = jwt.verify(token, privateKey) as JWTPayload;
    return userPayload;
  } catch (error) {
    console.error("Token verification error:", error); // سجل الخطأ للحصول على مزيد من المعلومات
    return null;
  }
}
