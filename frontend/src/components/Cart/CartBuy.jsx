import React from 'react'

export default function CartBuy() {

  return (
    <div className="container">
        <div className="row">
            <div className="col-6 p-2 d-flex">
            <input
                type="text"
                name=""
                placeholder='Add a cupon'
                className="form-control w-50"
                required
            />
                <button className="btn btn-outline-success mx-3">Add</button>
            </div>
            <div className="col-6 p-2"></div>
        </div>
    </div>
  )
}
