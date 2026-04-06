import { defineAction } from 'astro:actions'
import { getSendEmailUseCase } from '../../provider/contact.provider'
import { z } from 'zod'

export const sendEmail = defineAction({
  accept: 'json',
  input: z.object({
    name: z.string(),
    company: z.string(),
    email: z.string(),
    message: z.string(),
  }),
  handler: async ( input ) => {
    const useCase = getSendEmailUseCase()
    return await useCase.execute(input)
  }
})