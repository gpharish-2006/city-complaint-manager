import "../styles/Login.css";

function Register() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form>

          <div className="mb-3">

            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Mobile Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              City
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your city"
            />

          </div>

          <div className="mb-4">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />

          </div>

          <button className="btn btn-primary w-100">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;