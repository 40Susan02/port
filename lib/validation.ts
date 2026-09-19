import { z } from 'zod';

export const unlockRequestSchema = z.object({
  code: z.string().min(1).max(256)
});

export function validateRequestBody<T>(
  body: unknown, 
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(body);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: 'Invalid request data' };
}

export const MAX_REQUEST_BODY_SIZE = 1024;
