import React from 'react'
import resume from '../assets/resume.pdf'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/kelly70ve" className="icon fa-github" target="_blank">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kellygowing" className="icon fa-linkedin" target="_blank">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:kelly.a.gowing@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a href={resume} className="icon fa-file"  target="_blank">
            <span className="label">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
