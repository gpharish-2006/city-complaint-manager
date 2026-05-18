import Navbar from "../components/Navbar";
import "../styles/Complaints.css";

function CreateComplaint() {
  return (
    <>
      <div className="complaints-page">

        <div className="container py-5">

          <h1 className="text-center text-light mb-5">
            Create Complaint
          </h1>

          <div className="complaint-form">

            <form>

              <div className="mb-4">

                <label>
                  Complaint Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter complaint title" required
                />

              </div>

              <div className="mb-4">

                <label>
                  Category
                </label>

                <select className="form-control" required>

                  <option>Select Category</option>
                  <option>Roads</option>
                  <option>Water</option>
                  <option>Electricity</option>
                  <option>Garbage</option>

                </select>

              </div>

              <div className="mb-4">

                <label>
                  Description
                </label>

                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Describe the issue"
                  required
                ></textarea>

              </div>

              <div className="mb-4">

                <label>
                  Upload Image (Optional)
                </label>

                <input
                  type="file"
                  className="form-control"
                />

              </div>

              <button className="complaint-btn">
                Submit Complaint
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default CreateComplaint;