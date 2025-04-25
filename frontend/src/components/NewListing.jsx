import React, { useState, useContext, useEffect } from 'react'; // Added useContext and useEffect for admin check
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Added for navigation after adding listing
import { AuthContext } from '../context/authcontext'; // Added to access userData for admin check

export default function NewListing() {
  const navigate = useNavigate(); // Added navigate hook for navigation after adding listing
  const { userData, token } = useContext(AuthContext); // Access userData from AuthContext

  // Added effect to check admin access and redirect if not admin
  // useEffect(() => {
  //   if (!userData || !userData.isAdmin) { // Assuming userData has isAdmin property
  //     navigate('/listings'); // Redirect non-admin users to listings page
  //   }
  // }, [userData, navigate]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    quantity: '',
    price: '',
    country: '',
    location: '',
    type: '',        // New field
    condition: ''    // New field
  });

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert quantity to string before sending
      const dataToSend = {
        ...formData,
        quantity: formData.quantity.toString()
      };

      // Changed fetch URL to full backend URL with port 5000 to ensure request reaches backend
      const response = await fetch('https://crimatch.onrender.com/api/v1/newlisting', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
         },
        body: JSON.stringify(dataToSend)
      });

      const result = await response.json();
      console.log('Status:', response.status);
      console.log('Result:', result);

      if (response.ok) {
        setSnack({ open: true, message: 'Listing created successfully!', severity: 'success' });
        setFormData({
          title: '',
          description: '',
          image: '',
          quantity: '',
          price: '',
          country: '',
          location: '',
          type: '',
          condition: ''
        });
        navigate('/listings'); // Navigate to listing page after successful creation (added)
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
      <form onSubmit={handleSubmit}>
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
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
          {formData.image && (
            <div className="mt-2">
              <img
                src={formData.image}
                alt="Preview"
                style={{ maxWidth: '200px', borderRadius: '10px' }}
              />
            </div>
          )}
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
