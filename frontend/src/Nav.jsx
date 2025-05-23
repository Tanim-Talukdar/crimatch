import React, { useContext, useEffect, useState, useRef } from 'react';
import { AuthContext } from './context/authcontext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Profile from './components/profile';

export default function Nav() {
  const { token, handleLogout, userData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const collapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = new window.bootstrap.Collapse(collapse, { toggle: false });
    bsCollapse.hide();
    setShowProfile(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

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

          <form className="d-flex" style={{ width: "400px" }} onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search recycled products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div data-aos="fade-left" className="position-relative">
            <Link to="/cart" className="btn btn-outline-secondary rounded-circle mx-2" style={{ height: "50px", width: "48px", border: "0" }}>
              <ShoppingCartIcon />
            </Link>

            <button
              data-aos="zoom-in"
              className="btn btn-outline-secondary rounded-circle mx-2"
              style={{ height: "50px", width: "48px", border: "0" }}
              onClick={() => setShowProfile(!showProfile)}
            >
              <PersonIcon />
            </button>

            {showProfile && (
              <div
                ref={profileRef}
                data-aos="fade-up-left"
                className="position-fixed bg-white rounded shadow p-3"
                style={{ bottom: "-70px", right: "20px", zIndex: 1050, width: "385px", border: "1px solid #ccc" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">My Profile</h5>
                  <button type="button" className="btn-close" onClick={() => setShowProfile(false)}></button>
                </div>
                <Profile />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
