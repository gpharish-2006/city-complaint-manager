import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section">

        <div className="hero-content text-center text-light">

          <h1 className="mb-3">
            Smart City Complaint System
          </h1>

          <p className="mb-4">
            Help improve your city by reporting issues instantly.
          </p>

          <div>
            <button className="btn btn-info text-dark fw-bold me-3 px-4">
              Raise Complaint
            </button>

            <button className="btn btn-light text-dark fw-bold me-3 px-4">
              Track Status
            </button>
          </div>

        </div>

      </div>

      <div className="service py-5">

        <h2 className="text-center mb-5 fw-bold">
          Services
        </h2>

        <div className="row g-4">

          <div className="col-md-4">

            <div className="service-card">

              <h3>Road Problems</h3>

              <p>
                Report potholes and damaged roads quickly.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="service-card">

              <h3>Water Issues</h3>

              <p>
                Report leakage and drainage problems.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="service-card">

              <h3>Street Lights</h3>

              <p>
                Report street light and electricity issues.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;