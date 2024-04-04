"use client"

import * as z from "zod"

export const formSchema = z.object({
  email: z.string().min(2).email(),
  otp: z.string().length(4)
})
