import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/authcontext';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { BASE_URL } from '../../client';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

export default function Contact() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState('success');

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setSnackbarType('success');
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send the message');
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again later.');
      setSnackbarType('error');
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container text-muted">
      <br />
      <br />
      <br />
      <div className="text-center" data-aos="fade-down">
        <h1 className='clr'>Get In Touch With Us</h1>
        <p>
          For more information about our product & services. Please feel free to drop us an email. Our staff always be there to help you out.
        </p>
      </div>
      <br />
      <br />
      <div className="row">
        {/* Contact Info */}
        <div className="col-6 col-md-6 mb-4" data-aos="fade-right">
          <div className="card h-100 p-3">
            <h4 className='clr'>
              <AddLocationAltIcon sx={{ fontSize: 30 }} /> Address
            </h4>
            <p>Mirpur 11, Dhaka, Bangladesh</p>
            <div className='mt-3'>
              <LinkedInIcon className='text-primary me-3' sx={{ fontSize: 40 }} />
              <FacebookIcon className="text-primary" sx={{ fontSize: 40 }} />
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 mb-4" data-aos="fade-left">
          <div className="card h-100 p-3">
            <h4 className='clr'>Contact Detail</h4>
            <p><LocalPhoneIcon className='clr me-2' sx={{ fontSize: 25 }} />018 *** *** **</p>
            <p><EmailIcon className="clr me-2" sx={{ fontSize: 25 }} />talukdertanim73@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} data-aos="zoom-in-up">
          <div className="col-12 col-md-6 row">
            <div className="mb-4">
              <label className="form-label h5">Your Gmail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label h5">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label h5">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {loading && <div className="text-center">Loading...</div>}

            <button className='btn btn-success w-100 fs-5' type="submit">
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Snackbar for success or error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarType}
          sx={{ width: '100%' }}
        >
          {snackbarType === 'success' ? responseMessage : error}
        </Alert>
      </Snackbar>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
