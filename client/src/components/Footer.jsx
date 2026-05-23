import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <h4>SmartCity</h4>

              <p>
                Citizen Service Management System
                for reporting and tracking city issues.
              </p>

            </div>

            <div className="col-md-4">

              <h4>Quick Links</h4>

              <p><Link to="/" className="text-light">Home</Link></p>
              <p><Link to="/services" className="text-light">Services</Link></p>
              <p><Link to="/create-complaint" className="text-light">Raise Complaint</Link></p>

            </div>

            <div className="col-md-4">

              <h4>Emergency</h4>

              <p>Police: 100</p>
              <p>Ambulance: 108</p>
              <p>Fire Service: 101</p>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Footer;