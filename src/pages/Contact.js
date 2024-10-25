import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Contact";
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',  // Change this key
    email: '',      // Keep this for reference, but include in the message
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
        setSuccessMessage('Your message has been sent successfully!');
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

  return (
    <div className='container'>
      <div className='form-container'>
        <h1>Contact</h1>
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
            />
          </div>
          <button type='submit' disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
