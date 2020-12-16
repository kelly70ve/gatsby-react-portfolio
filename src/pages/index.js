import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
// import Contact from '../components/Contact'
import favicon from "../assets/images/website-icon.png"
import MyForm from '../components/MyForm'

const HomeIndex = () => {
  const siteTitle = 'Kelly Gowing - Full-Stack Developer'
  const siteDescription = 'Web Devlopment portfolio by Kelly Gowing, using Gatsby Starter - Strata'

  return (
    <Layout>
      <Helmet link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
  ]}>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        {/* fontawesome */}
        <script src="https://kit.fontawesome.com/8dda7d33fe.js" crossorigin="anonymous"></script>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            Hi, I'm Kelly Gowing
            </h2>
          </header>
          <p>
          Full Stack Web Developer with a background in Marketing and Event Management. I'm a 2020 UCSD Full-Stack Web Development Bootcamp and 2019 SDSU Marketing graduate. My dream is to be a UI/UX developer or Product Manager.
          </p>
          <h3>Technical Skills:</h3>
          <table>
            <tbody>
              <tr>
                <td><i className="skills fab fa-3x fa-html5"><span className="tooltiptext">HTML</span></i></td>
                <td><i className="skills fab fa-3x	fa-css3-alt"><span className="tooltiptext">CSS</span></i></td>
                <td><i className="skills fab fa-3x	fa-react"><span className="tooltiptext">React</span></i></td>
                <td><i className="skills fab fa-3x	fa-js-square"><span className="tooltiptext">JavaScript</span></i></td>
                <td><i className="skills fab fa-3x	fa-node-js"><span className="tooltiptext">Node.js</span></i></td>
                <td><i className="skills fab fa-3x	fa-git"><span className="tooltiptext">Git</span></i></td>
                <td><i className="skills fab fa-3x	fa-shopify"><span className="tooltiptext">Liquid(Shopify)</span></i></td>
                <td><i className="skills fab fa-3x	fa-bootstrap"><span className="tooltiptext">Bootstrap</span></i></td>
                <td><i className="skills fas fa-3x fa-database"><span className="tooltiptext">SQL</span></i></td>
              </tr>
            </tbody>
          </table>
          <ul className="actions">
            <li>
              <a href="#worktogether" className="button">
                Let's Work Together!
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Portfolio</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <MyForm/>
        
      </div>
    </Layout>
  )
}

export default HomeIndex
