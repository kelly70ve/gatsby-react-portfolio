import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const style = {
  heading: {
    display: "flex",
    flexDirection:"column"
  },
  links: {
    borderBottom: "none"
  }
}

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="Kelly Gowing" />
      </a>
      <h1 style={style.heading}>
        <strong>Kelly Gowing</strong>
        <a style={style.links} href="mailto:kelly.a.gowing@gmail.com">kelly.a.gowing@gmail.com</a>
        <a style={style.links} href="tel:619-655-6803">(619)-655-6803</a>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
