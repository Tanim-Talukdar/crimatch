import React, { useState, useContext, useEffect } from 'react'; 
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/authcontext'; 
import { BASE_URL } from '../../client';

export default function NewListing() {
  const navigate = useNavigate(); 
  const { userData, token } = useContext(AuthContext); 

  useEffect(() => {
    if (!userData || userData.role === "user") { 
      navigate('/listings'); 
    }
  }, [userData, navigate]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    quantity: '',
    price: '',
    country: '',
    location: '',
    type: '',        
    condition: ''    
  });

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {

      setFormData(prev => ({
        ...prev,
        image: files[0]  
      }));
    } else {

      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const dataToSend = new FormData();
      for (const key in formData) {
        dataToSend.append(key, formData[key]);
      }
  
      const response = await fetch(`${BASE_URL}/newlisting`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`
        },
        body: dataToSend 
      });
  
      const result = await response.json();
      console.log('Status:', response.status);
      console.log('Result:', result);
  
      if (response.ok) {
        setSnack({ open: true, message: 'Listing created successfully!', severity: 'success' });
        setFormData({
          title: '',
          description: '',
          image: null,
          quantity: '',
          price: '',
          country: '',
          location: '',
          type: '',
          condition: ''
        });
        navigate('/listings'); 
      } else {
        setSnack({ open: true, message: result.message || 'Failed to create listing.', severity: 'error' });
      }
    } catch (err) {
      console.error(err);
      setSnack({ open: true, message: 'Error occurred while creating listing.', severity: 'error' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        {/* Form fields */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleChange}
          />
          {/* {formData.image && (
            <div className="mt-2">
              <img
                src={formData.image}
                alt="Preview"
                style={{ maxWidth: '200px', borderRadius: '10px' }}
              />
            </div>
          )} */}
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        {/* New Fields */}
        <div className="mb-3">
          <label className="form-label">Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Condition</label>
          <input
            type="text"
            name="condition"
            className="form-control"
            value={formData.condition}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success">Add Listing</button>
      </form>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack({ ...snack, open: false })}
          severity={snack.severity}
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </div>
  )};
