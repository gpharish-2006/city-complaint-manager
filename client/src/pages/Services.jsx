import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Services.css";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Road Maintenance",
      description: "Report potholes, damaged roads and issues.",
      department: "Roads Department",
      hours: "9 AM - 6 PM",
      emergency: "1800-100-200",
      problems: ["Potholes", "Road Damage", "Traffic Signals"],
    },
    {
      id: 2,
      title: "Water Supply",
      description: "Report water leakage and drainage problems.",
      department: "Water Department",
      hours: "24/7",
      emergency: "1800-222-100",
      problems: ["Water Leakage", "Drainage Block", "Low Water Supply"],
    },
    {
      id: 3,
      title: "Street Lights",
      description: "Report damaged street lights and power issues.",
      department: "Electricity Department",
      hours: "9 AM - 5 PM",
      emergency: "1800-555-100",
      problems: ["Broken Lights", "Power Failure", "Cable Issues"],
    },
  ];

  const toggleCard = (e, id) => {
    if (e.target.closest(".login-btn")) return;

    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <>
      <div className="services-page">
        <div className="container py-5">
          <h1 className="text-center text-light mb-5">City Services</h1>
          
          {/* Added 'align-items-start' here to stop flex columns stretching */}
          <div className="row g-4 align-items-start">
            {services.map((service) => (
              <div className="col-md-4" key={service.id}>
                <div className="service-box" onClick={(e) => toggleCard(e, service.id)}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {activeCard === service.id && (
                    <div className="extra-details">
                      <hr />
                      <p>
                        <strong>Department:</strong> {service.department}
                      </p>
                      <p>
                        <strong>Working Hours:</strong> {service.hours}
                      </p>
                      <p>
                        <strong>Emergency:</strong> {service.emergency}
                      </p>
                      <p>
                        <strong>Common Problems:</strong>
                      </p>
                      <ul style={{ position: "center" }}>
                        {service.problems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <br />
                      <Link to="/create-complaint" className="login-btn">
                        Raise Complaint
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
