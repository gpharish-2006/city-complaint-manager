import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-5 py-3">

      <div className="container-fluid">

        <Link className="navbar-brand fw-bold fs-3 text-info" to="/">
          SmartCity
        </Link>

        <div className="d-flex align-items-center gap-4">

          <a href="#" className="nav-link text-light">
            Home
          </a>

          <a href="#" className="nav-link text-light">
            Services
          </a>

          <a href="#" className="nav-link text-light">
            Complaints
          </a>

          <Link className="login-btn" to="/login">
            Sign In / Sign Up
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;