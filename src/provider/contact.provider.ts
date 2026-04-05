import { SendEmailUseCase } from '../application/use-cases/contact/send-email.use-case'
import { ContactDatasourceImpl } from '../infrastructure/datasources/contact.datasource.impl'
import { SendEmailAdapter } from '../infrastructure/adapters/send-email.adapter'

export const getSendEmailUseCase = () => {
    const contactDatasource = new ContactDatasourceImpl()
    const sendEmailPort = new SendEmailAdapter()
    return new SendEmailUseCase( contactDatasource, sendEmailPort )
}