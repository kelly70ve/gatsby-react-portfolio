import React, {useState, useEffect} from 'react'
import { db } from './firebase'
import Recaptcha from 'react-recaptcha'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isVerified, setIsVerified] = useState("")

  useEffect(() => {
      setIsVerified(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isVerified) {
      if (!name || !email || !message) {
        alert('Please fill out all form fields')
      } else {
        db.collection('contacts').add({
          name: name,
          email: email,
          message: message
        })
        .then(() => {
          alert('Message has been submitted')
        })
        .catch((error) => {
          alert('Something went wrong, please try again')
        })

        setName("")
        setEmail("")
        setMessage("")
      }


    } else {
      alert('Please verify if you are human!')
    }

  }

  const recaptchaLoaded = () => {
    console.log("captcha successfully loaded")
  }

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  return (
    <section id="worktogether">
      <h2>Contact Me</h2>
      <div className="row">
        <div className="8u 12u$(small)">
          <form method="post" action="#" className="form" onSubmit={handleSubmit}>
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="12u">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <Recaptcha
                sitekey="6LdeZvwZAAAAAMnuvYT5HBO-qfBNwfXzuSFpXZ_N"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={recaptchaLoaded}
              />
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