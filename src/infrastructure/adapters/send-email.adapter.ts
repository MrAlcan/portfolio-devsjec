import nodemailer from 'nodemailer'
import { BUILD_ENVIRONMENTS } from '../config/build-enviroments'
import type { SendEmailPort } from '../../application/ports'
import type { SendEmailReqDto } from '../../application/dtos/request'

export class SendEmailAdapter implements SendEmailPort {
  private transporter = nodemailer.createTransport({
    host: BUILD_ENVIRONMENTS.SMTP_HOST,
    port: Number(BUILD_ENVIRONMENTS.SMTP_PORT),
    secure: BUILD_ENVIRONMENTS.SMTP_SECURE === 'true',
    auth: {
      user: BUILD_ENVIRONMENTS.SMTP_USER,
      pass: BUILD_ENVIRONMENTS.SMTP_PASS,
    },
  })

  async sendEmail(dto: SendEmailReqDto): Promise<void> {
    await this.transporter.sendMail({
      from: `"DEVSJEC Web" <${BUILD_ENVIRONMENTS.SMTP_USER}>`,
      to: BUILD_ENVIRONMENTS.CONTACT_EMAIL_TO,
      replyTo: dto.email,
      subject: `Nuevo contacto: ${dto.name}${dto.company ? ` — ${dto.company}` : ''}`,
      html: `
        <h2>Nuevo mensaje desde devsjec.com</h2>
        <p><strong>Nombre:</strong> ${dto.name}</p>
        <p><strong>Email:</strong> ${dto.email}</p>
        <p><strong>Empresa:</strong> ${dto.company || '—'}</p>
        <hr/>
        <p><strong>Mensaje:</strong></p>
        <p>${dto.message}</p>
      `,
    })
  }
}