import React from 'react';

const NumberBox = ({ quantity, setQuantity }) => {
  const handleChange = (e) => {
    const input = e.target.value;
    if (/^-?\d*$/.test(input)) {
      setQuantity(Number(input)); // Update quantity state in parent component (Show)
    }
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ width: '150px' }}>
      <div className="border d-flex align-items-center w-100">
        <button
          onClick={decrement}
          className="btn btn-outline-danger btn-sm"
          style={{ fontSize: '20px', width: '40px', height: '40px' }}
        >
          -
        </button>

        <input
          type="text"
          value={quantity}
          onChange={handleChange}
          className="form-control text-center"
          style={{ width: '100%', fontSize: '16px', border: "0" }}
        />

        <button
          onClick={increment}
          className="btn btn-outline-success btn-sm"
          style={{ fontSize: '20px', width: '40px', height: '40px' }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberBox;
