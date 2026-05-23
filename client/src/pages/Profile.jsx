import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await api.get(
        "/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data.user);

    } catch (err) {

      console.log(err);

    }

  };

  return (
    <>
      <div className="profile-page">

        <div className="profile-card">

            <div className="text-center mb-4">

                <div className="profile-avatar">
                👤
                </div>

                <h2 className="profile-name">
                {user?.name}
                </h2>

            </div>
            
            <div className="profile-info">

                <div className="profile-item">
                    <h5>Email</h5>
                    <p>{user?.email}</p>
                </div>

                <div className="profile-item">
                    <h5>City</h5>
                    <p>{user?.city}</p>
                </div>

                <div className="profile-item">
                    <h5>Role</h5>
                    <p>{user?.role}</p>
                </div>

                <div className="profile-item">
                    <h5>Joined</h5>
                    <p>
                    {
                        new Date(
                        user?.createdAt
                        ).toLocaleDateString()
                    }
                    </p>
                </div>

            </div>

        </div>

      </div>
    </>
  );
}

export default Profile;