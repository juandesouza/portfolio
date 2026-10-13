import './AboutSection.css'

const experience = [
  {
    label: 'Frontend',
    value:
      "Pixel-perfect UI implementation using Cursor's Figma MCP, TypeScript, JavaScript, React, Next.js, SvelteKit, React Native, Expo, Design System, Tailwind CSS, Shadcn, Zustand, Redux Toolkit, Context API, PWA, Leaflet, Mapbox, Socket.IO (client), Google OAuth, HTML, CSS",
  },
  {
    label: 'Frontend services',
    value: 'Vercel, Netlify, Render',
  },
  {
    label: 'Backend',
    value: 'Node.js, NestJS, Express, REST APIs, Socket.IO, Git, GitHub, Docker',
  },
  {
    label: 'Backend services',
    value: 'Render, Railway',
  },
  {
    label: 'Database',
    value: 'PostgreSQL, MongoDB',
  },
  {
    label: 'Database services',
    value: 'Supabase, nHost, MongoDB Atlas, Neon, Render',
  },
  {
    label: 'Payment services',
    value: 'Stripe, Lemon Squeezy, Braintree',
  },
  {
    label: 'AI / workflow',
    value: 'Cursor',
  },
  {
    label: 'OS',
    value: 'MXLinux (Debian)',
  },
] as const

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="about-eyebrow">About me</p>
          <h2 className="about-title">Building digital products e2e</h2>

          <p className="about-body">
            9+ years studying web development technologies
            <br />
            1+ year developing AI-first web &amp; mobile full-stack applications
          </p>

          <p className="about-headline">Experience in</p>

          <ul className="about-experience">
            {experience.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <p className="about-body about-body--knowledge">
            <strong>Knowledge in:</strong> Python, Rust, Blockchain, Web3,
            Polkadot, Substrate
          </p>
        </div>
      </div>
    </section>
  )
}
