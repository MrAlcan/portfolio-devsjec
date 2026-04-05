import type { SendEmailReqDto } from '../dtos/request'

export interface SendEmailPort {
  sendEmail( email: SendEmailReqDto ): Promise<void>
}