import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function Contact() {
  return (
    <div className="container text-muted">
      <br />
      <br />
      <br />
      <div className="text-center">
        <h1 className='clr'>Get In Touch With Us</h1>
        <p>
          For more information about our product & services. Please feel free to drop us an email. Our staff always be there to help you out.
        </p>
      </div>
      <br />
      <br />
      <div className="row">
        {/* Contact Info */}
        <div className="col-12 col-md-6 mb-4">
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

        {/* Contact Form */}
        <div className="col-12 col-md-6">
          <div className="mb-4">
            <label className="form-label h5">Your Gmail</label>
            <input type="email" name="email" className="form-control" required />
          </div>
          <div className="mb-4">
            <label className="form-label h5">Subject</label>
            <input type="text" name="subject" className="form-control" required />
          </div>
          <div className="mb-4">
            <label className="form-label h5">Message</label>
            <textarea name="message" className="form-control" rows={6} required />
          </div>
          <button className='btn btn-success w-100 fs-5'>Send</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}