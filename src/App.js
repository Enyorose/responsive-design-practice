import React from 'react'

//importing components into app
import { Blog, Features, Footer, Possibility, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'



const app = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app
