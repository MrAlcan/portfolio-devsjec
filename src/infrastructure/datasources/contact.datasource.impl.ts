import type { ContactDatasource } from '../../domain/datasources/contact.datasource'
import type { Email } from '../../domain/entities'

export class ContactDatasourceImpl implements ContactDatasource {
  async saveEmail(contact: Email): Promise<void> {
    // TODO: Implement email saving logic
    console.log("Saving contact email:", contact);
  }
}