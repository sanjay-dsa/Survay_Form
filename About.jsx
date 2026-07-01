import React, { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    course: "",
    rating: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.gender ||
      !formData.course ||
      !formData.rating
    ) {
      alert("Please fill all required fields.");
      return;
    }

    console.log(formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
      course: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Survey Form</h1>

        <p style={{ textAlign: "center", color: "#666" }}>
          Please fill out this survey.
        </p>

        {submitted && (
          <div
            style={{
              background: "#d4edda",
              color: "#155724",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            Survey submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Age *</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Gender *</label>

          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>

          <label>Course *</label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Course</option>
            <option>B.Sc</option>
            <option>BCA</option>
            <option>B.Com</option>
            <option>BBA</option>
            <option>MCA</option>
          </select>

          <label>Overall Rating *</label>

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Rating</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>

          <label>Feedback</label>

          <textarea
            rows="5"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0 20px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default About;
