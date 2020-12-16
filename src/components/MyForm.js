import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="worktogether">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="8u 12u$(small)">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/xjvearze"
              method="POST"
              className="form"
            >
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
                  <div className="actions" style={{ marginTop: 30 }}>
                    {status === "SUCCESS" ? <p>Thanks! I'll talk to you soon!</p> : <button className="button">Submit</button>}
                    {status === "ERROR" && <p>Oops! There was an error.</p>}
                  </div>
                </div>
              </div>
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

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}