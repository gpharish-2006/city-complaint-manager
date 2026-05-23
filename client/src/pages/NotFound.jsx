import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom,#020617,#0f172a)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >

      <div>

        <h1
          style={{
            fontSize: "120px",
            color: "#00e5ff",
            textShadow:
              "0 0 25px rgba(0,229,255,0.6)",
          }}
        >
          404
        </h1>

        <h2 className="mb-3">
          Page Not Found
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="login-btn"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;