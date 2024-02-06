import './App.css'
import AboutMe from './components/AboutMe'
import AboutMeLink from './components/AboutMeLink'
import ContactLink from './components/ContactLink'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <AboutMeLink />
      <AboutMe />
      <ContactLink />
      <Footer />
    </div>
  )
}

export default App
