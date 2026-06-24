import { useState } from 'react'
import { socialLinks } from '../data/social'

export default function SiteFooter() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      window.prompt('Copy your email:', email)
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-social">
        {socialLinks.map((link) => {
          if ('copy' in link) {
            return (
              <button
                key={link.id}
                type="button"
                className={`site-social-link${emailCopied ? ' site-social-link--copied' : ''}`}
                onClick={() => copyEmail(link.copy)}
                aria-label={`Copy email ${link.copy}`}
              >
                {emailCopied ? 'Copied!' : link.label}
              </button>
            )
          }

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-social-link"
            >
              {link.label}
            </a>
          )
        })}
      </div>
      <p>© {new Date().getFullYear()} Juan</p>
    </footer>
  )
}
