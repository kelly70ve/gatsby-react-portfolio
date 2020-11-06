import React from 'react'

const Contact = () => {
  return (
    <section id="worktogether">
      <h2>Contact Me</h2>
      <div className="row">
        <div className="8u 12u$(small)">
          <form method="post" action="#">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="12u">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul className="actions" style={{ marginTop: 30 }}>
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
                  San Diego, CA
                </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">Phone</span>
              </h3>
              <a href="tel:619-655-6803">(619)-655-6803</a>
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <a href="mailto:kelly.a.gowing@gmail.com">kelly.a.gowing@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}


export default Contact