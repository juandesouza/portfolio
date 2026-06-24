export const CONTACT_EMAIL = 'juandesouza7@gmail.com'

export type SocialLink =
  | { id: string; label: string; url: string }
  | { id: string; label: string; copy: string }

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@JuanDeSouza7',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juan-de-souza-552048222/',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    url: 'https://t.me/JuanDeSouza',
  },
  {
    id: 'x',
    label: 'X',
    url: 'https://x.com/Juan_De_Souza_',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/juandesouza/',
  },
  {
    id: 'medium',
    label: 'Medium',
    url: 'https://medium.com/@juandesouza',
  },
  {
    id: 'email',
    label: 'Email',
    copy: CONTACT_EMAIL,
  },
]
