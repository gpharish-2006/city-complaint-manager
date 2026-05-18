import Navbar from "../components/Navbar";
import "../styles/Track.css";

function Track() {
  return (
    <>
      <div className="track-page">

        <div className="track-box">

          <h1 className="mb-4">
            Track Complaint
          </h1>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Enter Complaint ID"
          />

          <button className="track-btn">
            Check Status
          </button>

          <div className="status-box mt-5">

            <h4>Status: In Progress</h4>

            <p>
              Your complaint is currently being reviewed by the city department.
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Track;