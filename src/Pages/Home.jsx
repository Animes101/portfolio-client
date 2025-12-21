import React from 'react'
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Banner from '../Components/Banner'
import Skill from './Skill'
import About from './About'
import Services from './Services'
import ContactPage from './Contact'
import Projects from './Project'

const Home = () => {
  return (
    <div className=''>
      {/* React Helmet */}
      <ReactHelmet pageName={'Portfolio | Home'} />

      {/* Banner Section  */}
      <Banner />

      <About />
      {/* <Skills /> */}

      <Skill />
       
       <Projects />

      <Services />

      <ContactPage />



    </div>
  )
}

export default Home