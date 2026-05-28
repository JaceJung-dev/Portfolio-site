import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "이름을 입력해주세요")
    .max(100, "이름이 너무 깁니다"),
  email: z
    .string()
    .trim()
    .email("올바른 이메일 주소를 입력해주세요")
    .max(254, "이메일 주소가 너무 깁니다"),
  message: z
    .string()
    .trim()
    .min(10, "메시지는 10자 이상 입력해주세요")
    .max(5000, "메시지는 5000자 이내로 작성해주세요"),
  // Bots tend to fill all visible-looking inputs. Real users never see this.
  website: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
