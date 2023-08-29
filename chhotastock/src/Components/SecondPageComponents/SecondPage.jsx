import React from 'react'
import '../Styles/SecondPage.css';
import Navbar from './Navbar'
import InvestStack from './InvestStack';
import Features from './Features';
import ConnectPlatform from './ConnectPlatform';
import Solution from './Solution';
import BrokerPartners from './BrokerPartners';
import ContactUs from './ContactUs';
import Footer from "../Footer/Footer"

function SecondPage() {
  return (
    <div>
      <Navbar />
      <InvestStack />
      <Features />
      <ConnectPlatform />
      <Solution />
      <BrokerPartners />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default SecondPage