import { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

function CreateComplaint() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);

      if (image) {
        formData.append("image", image);
      }

      const response = await api.post(
        "/complaints",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Complaint Submitted");

      console.log(response.data);

      setTitle("");
      setDescription("");
      setCategory("");
      setImage(null);

    } catch (err) {

      console.log(err);

      toast.error(err.response?.data?.message || "Complaint Submission Failed");
    }
  };

  return (
    <div className="complaints-page">

      <div className="complaint-form">

        <h2 className="mb-4 text-center text-info" style={{ textShadow: "0 0 12px rgba(0,229,255,0.5)" }}>
          Raise Complaint
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Complaint Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Complaint Description"
            className="form-control mt-3"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <select
            className="form-select mt-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Road">Road</option>
            <option value="Water">Water</option>
            <option value="Garbage">Garbage</option>
          </select>

          <input
            type="file"
            className="form-control mt-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="complaint-btn mt-4"
          >
            Submit Complaint
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateComplaint;