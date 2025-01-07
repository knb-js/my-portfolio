import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div >
      <Header />
      <main className="App bg-gray-800 min-h-screen">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
