import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Contact";
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;

    const emailMessage = `
      Hello {{to_name}},

      You got a new message from ${formData.from_name} (${formData.email}):

      ${formData.message}

      Best wishes,
      EmailJS team
    `;

    const templateParams = {
      from_name: formData.from_name,
      to_name: 'Recipient Name',
      message: emailMessage
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccessMessage('Message sent, thank you!');
        setFormData({ from_name: '', email: '', message: '' });
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setErrorMessage('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className='form-wrapper'>
        <div className='form-header'>
          <h1>Let's work together</h1>
          <p>If you have a potential project and think I'd be the ideal partner to bring it to life, please get in touch at <a href="mailto:hello@anthonythach.com" className='color email-hover'>hello@anthonythach.com</a>.<br /><br />I'd love to hear from you!<br /><br /><br /><br /></p>
          <p>Alternatively, you may contact me over at:</p>
          <div className="contact-social-icons">
            <a href="https://x.com/anthonysmotion" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/anthonysmotion/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/anthonythach/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='from_name'>Name:</label>
              <input
                type='text'
                id='from_name'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                style={{ height: '10rem' }}
              />
            </div>
            <button type='submit' disabled={isSending}>
              {isSending ? 'Sending...' : 'SUBMIT'}
            </button>
          </form>
          {successMessage && <p style={{ color: '#dcf263' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
