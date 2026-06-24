import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="about-eyebrow">About me</p>
          <picture className="about-photo">
            <source srcSet="/about/juan1.webp" type="image/webp" />
            <img
              src="/about/juan1.png"
              alt="Juan de Souza"
              width={480}
              height={721}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <h2 className="about-title">Building products end to end</h2>
          <p className="about-body">
            I&apos;m a prompt engineer with focus on full-stack web and mobile
            development, who enjoys taking ideas from sketch to production. I
            build web and mobile applications with a focus on clean
            architecture, thoughtful UX, and reliable backends.
          </p>

          <p className="about-headline">
            From Coding to Prompt Engineering with focus on web and mobile
            development
          </p>

          <p className="about-body">
            After 9 years of studying full-stack web and mobile development, I
            discovered AI and decided to switch my efforts from programming to
            learning how to control AI to develop what I want. I&apos;ve tried
            several AI tools, and the one that worked the best for me and that I
            felt the most powerful was Cursor and that&apos;s the tool I use for
            building full-stack apps.
          </p>

          <p className="about-body">
            Every full-stack developer knows that it&apos;s a problem when we
            have to solve so much problems involving front, back and db. But now
            that AI holds the knowledge of all the programming languages, it
            made the life of the full-stack developer so much easier, allowing
            us to focus more on the logic and main aspects of the app.
          </p>
        </div>
      </div>
    </section>
  )
}
