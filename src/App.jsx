import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Header />
      <main>
        <About />
        <Skills />
        {/* <Projects />
        <Contact /> */}
      </main>
    </div>
  )
}
