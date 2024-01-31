import './App.css'
import AboutMe from './components/AboutMe'
import AboutMeLink from './components/AboutMeLink'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <AboutMeLink />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
