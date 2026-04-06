export const BUILD_ENVIRONMENTS = {
    SMTP_HOST: import.meta.env.SMTP_HOST,
    SMTP_PORT: import.meta.env.SMTP_PORT,
    SMTP_SECURE: import.meta.env.SMTP_SECURE,
    SMTP_USER: import.meta.env.SMTP_USER,
    SMTP_PASS: import.meta.env.SMTP_PASS,
    CONTACT_EMAIL_TO: import.meta.env.CONTACT_EMAIL_TO
} as const
