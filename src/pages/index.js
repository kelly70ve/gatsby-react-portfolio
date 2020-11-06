import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Contact from '../components/Contact'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            Hi, I'm Kelly Gowing & I'm a front end web-developer
            </h2>
          </header>
          <p>
          2020 UCSD Full-Stack Web Development Bootcamp alumni and 2019 SDSU Marketing graduate. In December of 2019, I decided to make a major career change from Event Planning to Full Stack Web Development. My dream is to be a UI/UX developer or Product Manager, where I will utilize my skills in business, design, and development.
          </p>
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

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <Contact/>
        
      </div>
    </Layout>
  )
}

export default HomeIndex
