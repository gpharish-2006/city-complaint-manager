import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="hero-section">

        <div className="hero-content text-center text-light">

          <h1 className="mb-3">
            Citizen Service Management System
          </h1>

          <p className="mb-4">
            Help improve your city by reporting issues instantly.
          </p>

          <div>
            <Link to="/create-complaint" className="btn btn-info text-dark fw-bold me-3 px-4">
              Raise Complaint
            </Link>

            <Link to="/track" className="btn btn-light text-light fw-bold me-3 px-4">
              Track Status
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;