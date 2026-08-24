import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least 2 characters.').max(80),
  email: z.string().trim().email('Please enter a valid email address.').max(160),
  message: z.string().trim().min(20, 'Tell me a little more (at least 20 characters).').max(3000),
  company: z.string().max(0, 'Spam detected.').optional().default(''),
})

export type ContactInput = z.infer<typeof contactSchema>
