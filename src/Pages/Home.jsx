import React from 'react'
import ReactHelmet from '../Components/Layout/ReactHelmet'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div className=''>
      {/* React Helmet */}
      <ReactHelmet pageName={'Portfolio | Home'} />

      {/* Banner Section  */}
      <Banner />

    </div>
  )
}

export default Home