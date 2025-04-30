import React from 'react';
import Quantity from '../quantity';

export default function CartProduct() {
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


      <div className='row justify-content-between align-items-center'>

        <div className="col-7 mb-4 ms-2 radius d-flex align-items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s" 
            alt="Product" 
            className="col-3 rounded-3" 
          />
          <div className="col-4 ms-4">
            <h5 className="mb-2">Product Name</h5>
            <p className="mb-4">Product Type</p>
            <a href="#" className="clr">Remove</a>
          </div>
        </div>

        <div className="col-1 d-flex justify-content-center align-items-center">
          <p className="mb-0">৳20000</p>
        </div>


        <div className="col-2 d-flex justify-content-center align-items-center">
          <Quantity />
        </div>


        <div className="col-1 d-flex justify-content-end align-items-center">
          <p className="mb-0">৳39999</p>
        </div>
      </div>

      <hr />
    </>
  );
}