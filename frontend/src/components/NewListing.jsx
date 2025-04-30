import React, { useState, useContext, useEffect } from 'react'; 
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../context/authcontext'; 
import { ListingsContext } from '../context/listingContext'; 
import { BASE_URL } from '../../client';

export default function NewListing() {
  const navigate = useNavigate(); 
  const { userData, token } = useContext(AuthContext); 
  const { fetchListings } = useContext(ListingsContext); 

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
  const [loading, setLoading] = useState(false);  // Track loading state

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
    setLoading(true); // Set loading to true while submitting the form
  
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
      
      if (response.ok) {
        await fetchListings(); // ✅ Refresh listings
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
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='ff'>
        {/* Form fields */}
        <div className="mb-3" data-aos="fade-up">
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
        <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
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
        <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
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
        <div className="row" data-aos="fade-left" data-aos-delay="500">
          <div className="mb-3 col-6">
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
          <div className="mb-3 col-6">
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
        </div>

        <div className="row" data-aos="fade-right" data-aos-delay="600">
          <div className="mb-3 col-6">
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
          <div className="mb-3 col-6">
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
        </div>

        <button className="btn btn-success" data-aos="fade-up" data-aos-delay="700" disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Add Listing'}
        </button>
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
  );
}
