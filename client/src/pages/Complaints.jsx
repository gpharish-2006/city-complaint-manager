import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import "../styles/MyComplaints.css";

function Complaints() {

  const [complaints, setComplaints] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {

    const fetchComplaints = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await api.get(
          "/complaints/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setComplaints(response.data.complaint);

      } catch (err) {

        console.log(err);

      }
    };

    fetchComplaints();

  }, []);

  return (
    <>
      <div className="my-complaints-page">

        <div className="container py-5">

          <h2
            className="mb-5 text-center"
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            My Complaints
          </h2>

          <div className="row g-4">

            {
              complaints.map((item) => (

                <div
                  className="col-md-6"
                  key={item._id}
                >

                  <div
                    className="complaint-card"
                    onClick={() =>
                      setOpenId(
                        openId === item._id
                          ? null
                          : item._id
                      )
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >

                    <div className="d-flex justify-content-between align-items-center">

                      <h3>
                        {item.title}
                      </h3>

                      <span className="status-badge">
                        {item.status}
                      </span>

                    </div>

                    <p className="mt-3">
                      <strong>Complaint ID:</strong>
                      {" "}
                      {item.complaintId}
                    </p>

                    <button className="btn btn-info mt-3"
                      onClick={() => {
                        navigator.clipboard.writeText(item.complaintId);
                      }}
                    >
                      Copy Complaint ID
                    </button>

                    <p>
                      <strong>Category:</strong>
                      {" "}
                      {item.category}
                    </p>

                    <p>
                      <strong>Date:</strong>
                      {" "}
                      {
                        new Date(
                          item.createdAt
                        ).toLocaleDateString()
                      }
                    </p>

                    {
                      openId === item._id && (

                        <div className="mt-4">

                          <hr />

                          <p>
                            <strong>Description:</strong>
                          </p>

                          <p>
                            {item.description}
                          </p>

                          {
                            item.image && (

                              <img
                                src={`http://localhost:5000/${item.image}`}
                                alt="complaint"
                                className="img-fluid rounded mt-3"
                                style={{
                                  maxHeight: "250px",
                                  objectFit: "cover",
                                  width: "100%",
                                }}
                              />

                            )
                          }

                          <Link to={`/track?id=${item.complaintId}`} >
                            Track Status
                          </Link>

                        </div>

                      )
                    }

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>
    </>
  );
}

export default Complaints;