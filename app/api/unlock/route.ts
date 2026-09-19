import { NextRequest, NextResponse } from 'next/server';
import { getClientIp, timingSafeEqual } from '@/lib/security';
import { MAX_REQUEST_BODY_SIZE, unlockRequestSchema, validateRequestBody } from '@/lib/validation';
import { rateLimiter } from '@/lib/rate-limit';
import { signToken, createAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ success: false, message: 'Invalid request data' }, { status: 400 });
    }

    const text = await request.text();
    if (text.length > MAX_REQUEST_BODY_SIZE) {
      return NextResponse.json({ success: false, message: 'Invalid request data' }, { status: 400 });
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(text);
    } catch (e) {
      return NextResponse.json({ success: false, message: 'Invalid request data' }, { status: 400 });
    }

    const validation = validateRequestBody(parsedBody, unlockRequestSchema);
    if (!validation.success) {
      return NextResponse.json({ success: false, message: 'Unable to unlock this section.' }, { status: 400 });
    }

    const clientIp = getClientIp(request);
    const rateLimit = rateLimiter.check(clientIp);

    if (!rateLimit.success) {
      return NextResponse.json({ success: false, message: 'Too many attempts. Please try again later.' }, { status: 429 });
    }

    const accessCode = process.env.ACCESS_CODE;
    if (!accessCode) {
      console.error('Server configuration error: ACCESS_CODE not set');
      return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }

    const isMatch = timingSafeEqual(validation.data.code, accessCode);

    if (isMatch) {
      const token = await signToken();
      const cookieHeader = createAuthCookie(token);

      const response = NextResponse.json({ success: true });
      response.headers.set('Set-Cookie', cookieHeader);
      return response;
    } else {
      return NextResponse.json({ success: false, message: 'Unable to unlock this section.' }, { status: 401 });
    }

  } catch (error) {
    console.error('Unlock API Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export function GET() { return new NextResponse(null, { status: 405 }); }
export function PUT() { return new NextResponse(null, { status: 405 }); }
export function DELETE() { return new NextResponse(null, { status: 405 }); }
export function PATCH() { return new NextResponse(null, { status: 405 }); }
