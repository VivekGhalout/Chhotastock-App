import React from 'react'
import '../Styles/HomePage.css';
import TopComp from './TopComp';
import Features from './Features';
import EssentialFeatures from './EssentialFeatures';
import Partners from './Partners';
import Reviews from './Reviews';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <TopComp/>
      <Features/>
      <EssentialFeatures/>
      <Partners/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home