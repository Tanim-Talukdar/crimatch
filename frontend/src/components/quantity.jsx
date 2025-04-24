import React, { useState } from 'react';

const NumberBox = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^-?\d*$/.test(input)) {
      setValue(Number(input));
    }
  };

  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => {
    if (prev > 0) {
      return prev - 1; // Decrease only if the value is greater than 0
    }
    return prev; // If the value is 0 or less, don't change it
  });

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ width: '200px' }}>
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
          value={value}
          onChange={handleChange}
          className="form-control text-center"
          style={{ width: '120px', fontSize: '16px',border:"0" }}
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