import './App.css'
import AboutMe from './components/AboutMe'
import AboutMeLink from './components/AboutMeLink'
import ContactLink from './components/ContactLink'

function App() {
  return (
    <div className='w-screen h-full'>
      <AboutMeLink />
      <AboutMe />
      <ContactLink />
    </div>
  )
}

export default App
