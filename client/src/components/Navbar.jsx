import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-5 py-3">

      <div className="container-fluid">

        <Link className="navbar-brand fw-bold fs-3 text-info" to="/">
          SmartCity
        </Link>

        <div className="d-flex align-items-center gap-4">

          <Link to="/" className="nav-link text-light">
            Home
          </Link>

          <Link to="/services" className="nav-link text-light">
            Services
          </Link>

          <Link to="/complaints" className="nav-link text-light">
            Complaints
          </Link>

          <Link className="login-btn" to="/login">
            Sign In/Sign Up
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;