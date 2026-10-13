import Carousel from './components/Carousel3D'
import AboutSection from './components/AboutSection'
import SiteFooter from './components/SiteFooter'
import { projects } from './data/projects'
import { publicAsset } from './lib/publicAsset'
import './App.css'

function App() {
  return (
    <main className="app">
      <div className="page-spotlights" aria-hidden="true">
        <span className="page-spotlight page-spotlight--footer" />
      </div>

      <div className="app-content">
        <header className="site-hero">
          <img
            className="site-hero-image"
            src={publicAsset('/projects/586cb140-63ff-4a65-bd3a-9ccdccbfc610.png')}
            alt=""
            width={1983}
            height={793}
            decoding="async"
          />
          <div className="site-hero-overlay" aria-hidden="true" />
          <div className="site-hero-copy">
            <h1 className="site-name">Juan De Souza</h1>
            <p className="site-eyebrow">Portfolio</p>
          </div>
        </header>

        <Carousel projects={projects} />
        <AboutSection />
        <SiteFooter />
        <div className="page-end-spacer" aria-hidden="true" />
      </div>
    </main>
  )
}

export default App
