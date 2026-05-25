import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";
import { toast } from "react-toastify";

function Admin() {

  const [complaints, setComplaints] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    users: 0,
  });

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await api.get(
        "/admin/complaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaints(response.data.complaints);

      calculateStats(response.data.complaints);

    } catch (error) {

      toast.error("Error fetching complaints");

      console.log(error);

    }

  };

  const calculateStats = (data) => {

    const totalComplaints = data.length;

    const pendingComplaints = data.filter(
      (item) => item.status === "Pending"
    ).length;

    const resolvedComplaints = data.filter(
      (item) => item.status === "Resolved"
    ).length;

    const uniqueUsers = [
      ...new Set(data.map((item) => item.userId?._id)),
    ].length;

    setStats({
      total: totalComplaints,
      pending: pendingComplaints,
      resolved: resolvedComplaints,
      users: uniqueUsers,
    });

  };

  const updateStatus = async (id, newStatus) => {

    try {

      const token = localStorage.getItem("token");

      await api.put(
        `/admin/complaints/${id}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Status Updated");

      fetchComplaints();

    } catch (error) {

      toast.error("Error updating status");

      console.log(error);

    }

  };

  const deleteComplaint = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await api.delete(
        `/admin/complaints/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Complaint Deleted");

      fetchComplaints();

    } catch (error) {

      toast.error("Error deleting complaint");

      console.log(error);

    }

  };

  return (
    <>
      <Navbar />

      <div className="admin-page">

        <div className="container">

          {/* TITLE */}

          <h1 className="admin-title">
            Admin Dashboard
          </h1>

          {/* STATS */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">

              <div className="admin-stat-card">

                <h5>Total Complaints</h5>

                <h2>{stats.total}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="admin-stat-card">

                <h5>Pending</h5>

                <h2>{stats.pending}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="admin-stat-card">

                <h5>Resolved</h5>

                <h2>{stats.resolved}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div className="admin-stat-card">

                <h5>Users</h5>

                <h2>{stats.users}</h2>

              </div>

            </div>

          </div>

          {/* TABLE */}

          <div className="admin-table-box">

            <h3>
              Complaint Management
            </h3>

            <div className="table-responsive">

              <table className="table table-dark table-hover align-middle">

                <thead>

                  <tr>

                    <th>ID</th>

                    <th>Title</th>

                    <th>User</th>

                    <th>Category</th>

                    <th>Status</th>

                    <th>Date</th>

                    <th>Image</th>

                    <th>Actions</th>

                  </tr>

                </thead>

                <tbody>

                  {
                    complaints.map((item) => (

                      <tr key={item._id}>

                        <td>
                          {item.complaintId}
                        </td>

                        <td>
                          {item.title}
                        </td>

                        <td>
                          {item.userId?.name}
                        </td>

                        <td>
                          {item.category}
                        </td>

                        <td>

                          <select
                            className="admin-select"
                            value={item.status}
                            onChange={(e) =>
                              updateStatus(
                                item._id,
                                e.target.value
                              )
                            }
                          >

                            <option>
                              Pending
                            </option>

                            <option>
                              In Progress
                            </option>

                            <option>
                              Resolved
                            </option>

                          </select>

                        </td>

                        <td>

                          {
                            new Date(
                              item.createdAt
                            ).toLocaleDateString()
                          }

                        </td>

                        <td>

                          {
                            item.image ? (
                              <img
                                src={`http://localhost:5000/${item.image}`}
                                alt="complaint"
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  objectFit: "cover",
                                  borderRadius: "12px",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                }}
                              />
                            ) : (
                              "No Image"
                            )
                          }

                        </td>

                        <td>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              deleteComplaint(item._id)
                            }
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))
                  }

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Admin;