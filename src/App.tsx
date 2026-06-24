import Carousel from './components/Carousel3D'
import AboutSection from './components/AboutSection'
import SiteFooter from './components/SiteFooter'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <main className="app">
      <div className="page-spotlights" aria-hidden="true">
        <span className="page-spotlight page-spotlight--header" />
        <span className="page-spotlight page-spotlight--about" />
        <span className="page-spotlight page-spotlight--footer" />
        <span className="page-spotlight page-spotlight--left" />
        <span className="page-spotlight page-spotlight--right" />
      </div>

      <div className="app-content">
        <header className="site-header">
          <h1 className="site-name">JUAN DE SOUZA</h1>
          <p className="site-eyebrow">Portfolio</p>
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
