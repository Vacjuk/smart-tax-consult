import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Zadejte platný e-mail"),
  service: z.string().optional(),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
