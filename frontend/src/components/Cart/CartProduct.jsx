import React, { useContext } from 'react';
import { cartcontext } from '../../context/cartcontext';
import Quantity from '../quantity';
import { useParams } from 'react-router-dom';

export default function CartProduct() {
  const { cartList, loading, notFound,DeleteCart  } = useContext(cartcontext);


  const handleRemove = (id) => {
      DeleteCart(id);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (notFound) {
    return <p>No items in your cart.</p>;
  }

  return (
    <>
      {/* Header Row */}
      <div className='row'>
        <h2 className='col-6'>Cart Items</h2>
        <a href="/listings" className='col-6 text-end clr'>Back to Shopping</a>
      </div>

      <br />

      {/* Labels Row */}
      <div className='row justify-content-between'>
        <p className="col-7 m-1">Product</p>
        <p className="col-1 m-1 text-center">Price</p>
        <p className="col-2 m-1 text-center">Quantity</p>
        <p className="col-1 m-1 text-end">Total</p>
      </div>

      <hr />
      <br />

      {/* Loop through cartList to display each product */}
      {cartList.map(item => (
        <div key={item._id} className='row justify-content-between align-items-center'>
          <div className="col-7 mb-4 ms-2 radius d-flex align-items-center">
            <img 
              src={item.productId.image.path} 
              alt={item.productId.title} 
              className="col-3 rounded-3" 
            />
            <div className="col-4 ms-4">
              <h5 className="mb-2">{item.productId.title}</h5>
              <p className="mb-4">{item.productId.type}</p>
              <button onClick={() => handleRemove(item._id)} className="btn btn-link text-success p-0">Remove</button>

            </div>
          </div>

          <div className="col-1 d-flex justify-content-center align-items-center">
            <p className="mb-0">৳{item.productId.price}</p>
          </div>

          <div className="col-2 d-flex justify-content-center align-items-center">
            <Quantity quantity={item.quantity} />
          </div>

          <div className="col-1 d-flex justify-content-end align-items-center">
            <p className="mb-0">৳{item.totalPrice}</p>
          </div>
        </div>
      ))}

      <hr />
    </>
  );
}