import React, { useState, useEffect, useContext } from 'react';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ListingsContext } from '../context/listingContext';
import { BASE_URL } from '../../client';
import Loading from '../Loading'; // Adjust path if needed

export default function EditListing() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { fetchSingleListing, listing } = useContext(ListingsContext);

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
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // For submit button

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    fetchSingleListing(id);
  }, [id, navigate, fetchSingleListing, token]);

  useEffect(() => {
    if (listing && !loaded) {
      setFormData({
        title: listing.title || '',
        description: listing.description || '',
        image: listing.image || null,
        quantity: listing.quantity || '',
        price: listing.price || '',
        country: listing.country || '',
        location: listing.location || '',
        type: listing.type || '',
        condition: listing.condition || ''
      });
      setLoaded(true);
    }
  }, [listing, loaded]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = new FormData();
      for (const key in formData) {
        if (key === 'image') {
          if (formData.image instanceof File) {
            dataToSend.append('image', formData.image);
          }
        } else {
          dataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${BASE_URL}/edit/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: dataToSend
      });

      const result = await response.json();

      if (response.ok) {
        setSnack({ open: true, message: 'Listing updated successfully!', severity: 'success' });
        navigate('/listings');
      } else {
        setSnack({
          open: true,
          message: result.message || 'Failed to update listing.',
          severity: 'error'
        });
      }
    } catch (err) {
      console.error(err);
      setSnack({
        open: true,
        message: 'Error occurred while updating listing.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <h2>Edit Listing</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="ff">
        <div className="form-group mb-3">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Image</label>
          <input type="file" name="image" onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label>Type</label>
          <select name="type" value={formData.type} onChange={handleChange} className="form-control">
            <option value="">Select Type</option>
            <option value="PET">PET</option>
            <option value="HDPE">HDPE</option>
            <option value="LDPE">LDPE</option>
            <option value="PP">PP</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Condition</label>
          <select name="condition" value={formData.condition} onChange={handleChange} className="form-control">
            <option value="">Select Condition</option>
            <option value="raw">Raw</option>
            <option value="processed">Processed</option>
          </select>
        </div>

        <button className="btn btn-success" disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Update Listing'}
        </button>
      </form>

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
