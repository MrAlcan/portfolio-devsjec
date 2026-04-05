import type { Email } from '../entities/contact/email.entity'

export interface ContactDatasource {
  saveEmail(email: Email): Promise<void>
}
