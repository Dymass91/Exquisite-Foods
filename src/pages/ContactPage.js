import React from 'react';
import Axios from 'axios';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ disabled: true });

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res => {
        this.setState({ disabled: false, emailSent: res.data.success ? true : false });
      })
      .catch(() => {
        this.setState({ disabled: false, emailSent: false });
      });
  };

  render() {
    const { name, email, message, disabled, emailSent } = this.state;
    return (
      <div className="contact-page">

        <div className="contact-page__grid">

          <div className="contact-page__info">
            <h1 className="contact-page__title">Get in touch</h1>
            <div className="contact-page__divider"><span>✦</span></div>

            <div className="contact-page__details">
              <div className="contact-detail">
                <span className="contact-detail__icon" role="img" aria-label="Company">🏢</span>
                <div>
                  <strong>Exquisite Foods Distributor Limited</strong>
                  <p>Company reg. 12143850</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon" role="img" aria-label="Phone">📞</span>
                <div>
                  <strong>Mobile</strong>
                  <p>07375081408</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon" role="img" aria-label="Location">📍</span>
                <div>
                  <strong>Origin</strong>
                  <p>Andalusia, Spain</p>
                </div>
              </div>
            </div>

            <div className="contact-page__map">
              <iframe
                title="Exquisite Foods location"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=36.880606,-5.408098&key=AIzaSyBj7ZA7DO2_mnpYz3SYZEeqAC56E9b7uyk"
              />
            </div>
          </div>

          <div className="contact-page__form-wrap">
            <h2 className="contact-page__form-title">Send a message</h2>
            <form className="contact-form" onSubmit={this.handleSubmit}>

              <div className="contact-form__field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  rows="6"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={disabled}
                className={`contact-form__submit${disabled ? ' loading' : ''}`}
              >
                {disabled ? 'Sending…' : 'Send Message'}
              </button>

              {emailSent === true && (
                <p className="contact-form__status contact-form__status--ok">
                  ✓ Your message has been sent. We will be in touch shortly.
                </p>
              )}
              {emailSent === false && (
                <p className="contact-form__status contact-form__status--err">
                  ✗ Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default ContactPage;
