import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="nav-link active" to="/">
                Home
              </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="/about">
                About
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/book">
                Book
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/services">
                Offered Services
              </Link>
        </li>
        {/* <li className="nav-item dropdown">
        <Link className="nav-link active" to="/">
                O
              </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}
