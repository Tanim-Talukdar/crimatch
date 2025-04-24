import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='mt-5' style={{ backgroundColor: "rgb(250, 250, 250)" , borderTop: "2px solid #bbb",paddingBottom: "60px"}}>
    <div className="container  mt-4 ">
      <div className="row mt-5">
        <div className="col">
        <h1>
          <Link className="navbar-brand text-success" to="/">Crimatch</Link>
        </h1>
          <p>
            &copy; 2024 - 2025, Crimatch. All rights reserved.
          </p>
        </div>
        <div className="col">
          <h3 className='clr'>Company</h3>
          <a href="">About</a>
          <br />
          <a href="">Products</a>
          <br />
          <a href="">Pricing</a>
          <br />
          <a href="">Referral programme</a>
          <br />
          <a href="">Careers</a>
          <br />
          <a href="">Zerodha.tech</a>
          <br />
          <a href="">Press & media</a>
          <br />
          <a href="">Crimatch cares (CSR)</a>
          <br />
        </div>
        <div className="col">
          <h3 className='clr'>Support</h3>
          <a href="">Contact</a>
          <br />
          <a href="">Support portal</a>
          <br />
          <a href="">C-Connect blog</a>
          <br />
          <a href="">List of charges</a>
          <br />
          <a href="">Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <h3 className='clr'>Account</h3>
          <a href="">Open an account</a>
          <br />
          <a href="">Fund transfer</a>
          <br />
          <a href="">60 day challenge</a>
          <br />
        </div>
      </div>
    </div>
    </footer>
  )
}
