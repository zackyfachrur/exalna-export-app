import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    companyName: z.string().min(1, "Company Name is required"),
    companyCategories: z.string(),
    yearsOfExperience: z
      .number()
      .min(1, "Years of Experience must be greater than 0"),
    password: z.string().min(6, "Should be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Should be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  identifier: z.string().min(1, "Username or Email is required"),
  password: z.string().min(6, "Should be at least 6 characters"),
  confirmPassword: z.string().min(6, "Should be at least 6 characters"),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof signInSchema>;
