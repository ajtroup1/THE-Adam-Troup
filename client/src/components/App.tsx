import { Route, Routes } from 'react-router-dom'
import '../styles/App.css'
import '../styles/styles.css'
import Footer from './Shared/Footer'
import Home from './Home/Home'

import Navbar from './Shared/Navbar'
import Unrecognized from './Shared/Unrecognized'
import About from './About/About'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {

  return (
    <>
      <Navbar />
      <section className="section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Unrecognized />} />
        </Routes>
      </section>
      <Footer />
    </>
  )
}

export default App
