import React, { useContext } from 'react';
import { AuthContext } from '../context/authcontext';


export default function Profile() {
    const { userData, token } = useContext(AuthContext); 
  return (
    <div className="position-absolute end-0 top-100 bg-white shadow rounded p-4" style={{ width: '24rem', zIndex: 1000 }}>
      



      {/* Profile section */}
      <div className="d-flex align-items-center border-bottom pb-3 mb-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZB1b6rfq8kiI0s_oA6AvusMSGQUsMaI4WQ&s" alt="avatar" className="rounded-circle me-3" width="80" height="80" />
        <div>
          <h6 className="mb-1 fw-semibold">{userData.name}</h6>
          <small className="text-muted d-block">{userData.role}</small>
          <small className="text-muted">{userData.email}</small>
        </div>
      </div>

      {/* Menu items
      <div className="list-group mb-3">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-action d-flex align-items-start gap-3"
            style={{ cursor: 'pointer' }}
          >
            <div
              className="p-2 rounded"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <div>
              <div className="fw-semibold">{item.title}</div>
              <small className="text-muted">{item.desc}</small>
            </div>
          </div>
        ))}
      </div> */}

      {/* Logout button
      <div className="d-grid">
        <button className="btn btn-danger rounded-pill">Logout</button>
      </div> */}
    </div>
  );
}
