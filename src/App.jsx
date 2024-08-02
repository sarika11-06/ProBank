import React from 'react'
import styles from './style'
// import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonals, Clients, CTA, Footer } from './components";
import Navbar from './components/Navbar.jsx'
import Stats from './components/Stats.jsx'
import Business from './components/Business.jsx'
import CardDeal from './components/CardDeal.jsx'
import Billing from './components/Billing.jsx'
import Testimonals from './components/Testimonals.jsx'
import Clients from './components/Clients.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Business />
          <Billing />
          <CardDeal />
          <Testimonals />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
