import { z } from "zod";

export const userSchema = z.object({
  email: z.email("Invalid email format"),
  password: z
    .string()
    .min(8, "Must be at least 8 characters")
    .max(32, "Must be at most 32 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/\d/, "Must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
});
