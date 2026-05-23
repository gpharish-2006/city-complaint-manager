import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api/axios";

function Track() {

  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [searchParams] = useSearchParams();
  const compId = searchParams.get("id");

  useEffect(() => {
    if (compId) {
      setComplaintId(compId);
      fetchComplaint(compId);
    }
  }, [compId]);


  const fetchComplaint = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get( `/complaints/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaint(response.data.complaint);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    fetchComplaint(complaintId);
  };

  return (
    <div className="track-page">

      <div className="track-box">

        <h1 className="mb-4 text-center text-info" style={{ textShadow: "0 0 12px rgba(0,229,255,0.5)" }}>
          Track Complaint
        </h1>

        <form onSubmit={handleTrack}>

          <input
            type="text"
            placeholder="Enter Complaint ID"
            className="form-control"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            required
          />

          <button
            type="submit"
            className="track-btn mt-4"
          >
            Track Status
          </button>

        </form>

        {
          complaint && (

            <div className="status-box mt-4">

              <h4>{complaint.title}</h4>

              <p>{complaint.description}</p>

              <p>
                <strong>Category:</strong>
                {" "}
                {complaint.category}
              </p>

              <span className="status-badge">
                {complaint.status}
              </span>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Track;