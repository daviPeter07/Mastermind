import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth.types.js";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("A chave secreta JWT não foi definida");
} //se o token nao existir dispara esse erro

//criação de token que expira em 7 dias
export function signJwt(payload: JwtPayload): string {
  const token = jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: "7d",
  });
  return token;
}

//verificação de token se ainda for válido
export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET as string) as JwtPayload;
  } catch(error) {
    return null;
  }
}