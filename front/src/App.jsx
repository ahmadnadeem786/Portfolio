import React from 'react'
import Header from './components/Header'
import Tools from './components/Tools'
import Projects from './components/Projects'
// import Nav from './components/nav'
import Footer from './components/Footer'
import Testimonials from './components/testimonials.jsx'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='min-h-screen '>
      {/* <Nav /> */}
      <Header/>
      <Tools/>
      <Projects/>
      <Testimonials/>
       <Contact/>
      <Footer/>
    </div>
  )
}

export default App
