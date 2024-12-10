import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Please add a message"),
});

export const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export type ContactFormValues = z.infer<typeof contactFormSchema>;
