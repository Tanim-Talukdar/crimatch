import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/authcontext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { token, handleLogout, userData } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const collapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = new window.bootstrap.Collapse(collapse, {
      toggle: false,
    });
    bsCollapse.hide();
  }, [location]);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom" data-aos="fade-down">
        <div className="container-fluid mx-5">
          <h1 data-aos="fade-right">
            <Link className="navbar-brand clr" to="/">Crimatch</Link>
          </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon text-success"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="w-100">
              <ul className="navbar-nav mb-2 mb-lg-0 mx-5 justify-content-center" data-aos="fade-down">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Listings">Listings</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact us</Link></li>
                {userData && userData.role === "admin" && (
                  <li className="nav-item"><Link className="nav-link" to="/newlisting">Add New Listing</Link></li>
                )}
              </ul>
            </div>

            <div className="d-flex justify-content-end" style={{ width: "250px" }} data-aos="fade-left">
              {token ? (
                <button className="btn btn-outline-danger w-100 fs-5" onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <Link className="btn btn-success me-2 fs-5" to="/auth">Sign in</Link>
                  <Link className="btn btn-outline-success fs-5" to="/auth">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* BOTTOM NAVBAR */}
      <nav className="navbar navbar-light bg-light px-4" data-aos="fade-up">
        <div className="container-fluid d-flex justify-content-between align-items-center w-100">
          <div style={{ width: "150px" }}></div>

          <form className="d-flex" style={{ width: "400px" }} data-aos="zoom-in">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div data-aos="fade-left">
            <a href="/cart" className="btn btn-outline-secondary rounded-circle mx-2" style={{ height: "50px", width: "48px", border: "0" }}>
              <ShoppingCartIcon />
            </a>
            <a href="/profile" className="btn btn-outline-secondary rounded-circle mx-2" style={{ height: "50px", width: "48px", border: "0" }}>
              <PersonIcon />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}



