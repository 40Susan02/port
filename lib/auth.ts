import { SignJWT, jwtVerify } from 'jose';

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error('AUTH_SECRET is not set');
  }
  return new TextEncoder().encode(secret);
}

export async function signToken(): Promise<string> {
  const secret = getSecret();
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject('experience-access')
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(secret);
    
  return token;
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = getSecret();
    await jwtVerify(token, secret, {
      subject: 'experience-access',
    });
    return true;
  } catch (error) {
    return false;
  }
}

export const AUTH_COOKIE_NAME = 'exp_auth';

export function createAuthCookie(token: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  return `${AUTH_COOKIE_NAME}=${token}; HttpOnly; ${isProd ? 'Secure; ' : ''}SameSite=Strict; Path=/api/experience; Max-Age=900`;
}

export function clearAuthCookie(): string {
  return `${AUTH_COOKIE_NAME}=; HttpOnly; SameSite=Strict; Path=/api/experience; Max-Age=0`;
}
