import bcrypt from "bcrypt";

const saltRounds = 10;
//faz o hash da senha e tranforma em 10 caracteres

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}
//funcao pra fazer hash pra encriptografar a senha

export async function comparePassword(
  password: string, 
  hash: string
): Promise<boolean> {
  const result = await bcrypt.compare(password, hash);
  return result;
}
//funcao pra fazer comparacao de senha