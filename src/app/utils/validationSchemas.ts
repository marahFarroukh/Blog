import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title type should be string ",
    })
    .min(2, { message: "title length should be more of 2 characters" })
    .max(200, { message: "title length should be les of 200 characters" }),

  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description type should be string ",
    })
    .min(4, { message: "description length should be more of 4 characters" }),
});
