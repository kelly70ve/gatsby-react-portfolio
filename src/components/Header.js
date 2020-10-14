import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="Kelly Gowing" />
      </a>
      <h1>
        <strong>Kelly Gowing</strong>
        <br />
        <a href="mailto:kelly.a.gowing@gmail.com">kelly.a.gowing@gmail.com</a>
        <br />
        <a href="tel:619-655-6803">(619)-655-6803</a>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
