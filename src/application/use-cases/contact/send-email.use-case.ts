import type { ContactDatasource } from '../../../domain/datasources/contact.datasource'
import type { SendEmailReqDto } from '../../dtos/request'
import type { SendEmailResDto } from '../../dtos/response'
import type { Email } from '../../../domain/entities'
import type { SendEmailPort } from '../../ports'

export class SendEmailUseCase {
  constructor(
    private readonly contactDatasource: ContactDatasource,
    private readonly sendEmailPort: SendEmailPort
  ) {}
  
  async execute( dto: SendEmailReqDto ): Promise<SendEmailResDto> {
    // TODO: Implement email sending logic
    await this.sendEmailPort.sendEmail( dto )
    const email: Email = {
      name: dto.name,
      message: dto.message,
      email: dto.email,
      company: dto.company
    }
    this.contactDatasource.saveEmail( email )
    
    return {
      success: true,
      message: 'Email sent successfully'
    }
  }
}