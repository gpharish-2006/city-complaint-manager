import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import "../styles/MyComplaints.css";

function Complaints() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    const fetchComplaints = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/complaints"
        );

        setComplaints(response.data);

      } catch (error) {

        console.log("Error fetching complaints", error);

      }

    };

    fetchComplaints();

  }, []);

  return (
    <>
      <div className="my-complaints-page">

        <div className="container py-5">

          <h1 className="text-center text-light mb-5">
            My Complaints
          </h1>

          <div className="row g-4">

            {complaints.length > 0 ? (

              complaints.map((item) => (

                <div className="col-md-6" key={item._id}>

                  <div className="complaint-card">

                    <h3>{item.title}</h3>

                    <p>
                      <strong>Category:</strong> {item.category}
                    </p>

                    <p>
                      <strong>Description:</strong> {item.description}
                    </p>

                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>

                    <span className="status-badge">
                      {item.status}
                    </span>

                  </div>

                </div>

              ))

            ) : (

              <div className="text-center text-light">

                <h4>No Complaints Found</h4>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default Complaints;