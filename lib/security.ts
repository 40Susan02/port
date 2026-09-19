export function timingSafeEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;

  const encoder = new TextEncoder();
  const aBuf = encoder.encode(a);
  const bBuf = encoder.encode(b);

  let result = 0;
  
  if (aBuf.length !== bBuf.length) {
    // If lengths differ, we still compare to avoid timing leak, 
    // but the final result must be false.
    let temp = 0;
    for (let i = 0; i < aBuf.length; i++) {
        temp |= aBuf[i] ^ aBuf[i];
    }
    return false;
  }

  for (let i = 0; i < aBuf.length; i++) {
    result |= aBuf[i] ^ bBuf[i];
  }

  return result === 0;
}

export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    const ips = xff.split(',').map(ip => ip.trim());
    if (ips.length > 0) return ips[0];
  }
  return '127.0.0.1';
}
