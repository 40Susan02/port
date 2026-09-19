import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, AUTH_COOKIE_NAME } from '@/lib/auth';

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: 'Data Annotator — Image & Video',
    company: 'iMerit Technology',
    type: 'Remote Freelance Contract',
    period: '2024–2026',
    details: [
      'Annotated images/video using bounding boxes, polygons, segmentation and keypoints',
      'Evaluated AI/ML model outputs daily',
      'Maintained less than 10% error rate',
      'Approximately 4 tasks/minute',
      'Wrote structured QA feedback reports',
      'Helped refine labeling guidelines',
      'Used Worksuite and other annotation platforms',
    ],
  },
  {
    id: 2,
    role: 'Prompt Engineering, Data Annotation & Translation',
    company: 'Freelance',
    type: 'Remote Freelance',
    period: '2024–Present',
    details: [
      'Designed and optimized prompts for ChatGPT, Claude and Gemini',
      'Evaluated AI outputs for correctness, tone and logic',
      'Used few-shot and role-based prompting',
      'Translated/localized English ↔ Nepali content',
    ],
  },
] as const;

export async function GET(request: NextRequest) {
  try {
    const authCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    
    if (!authCookie) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    const isValid = await verifyToken(authCookie);
    
    if (!isValid) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    return NextResponse.json(EXPERIENCE_DATA, {
      headers: {
        'Cache-Control': 'no-store'
      }
    });

  } catch (error) {
    console.error('Experience API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export function POST() { return new NextResponse(null, { status: 405 }); }
export function PUT() { return new NextResponse(null, { status: 405 }); }
export function DELETE() { return new NextResponse(null, { status: 405 }); }
export function PATCH() { return new NextResponse(null, { status: 405 }); }
