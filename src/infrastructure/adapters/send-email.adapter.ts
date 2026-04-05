import type { SendEmailPort } from '../../application/ports'
import type { SendEmailReqDto } from '../../application/dtos/request'

export class SendEmailAdapter implements SendEmailPort {
    async sendEmail(dto: SendEmailReqDto): Promise<void> {
        // TODO: Implement email sending logic
        console.log("Sending email:", dto)
    }
}
