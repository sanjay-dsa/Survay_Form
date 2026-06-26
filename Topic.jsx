import React, { useState } from "react";
import "./Topic.css";

const Topic = () => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    category: "",
  });

  const [topics, setTopics] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.topic ||
      !formData.description ||
      !formData.category
    ) {
      alert("Please fill all fields");
      return;
    }

    setTopics([...topics, formData]);

    setFormData({
      topic: "",
      description: "",
      category: "",
    });
  };

  return (
    <div className="topic-container">
      <h2>Survey Topic Management</h2>

      <form onSubmit={handleSubmit} className="topic-form">

        <input
          type="text"
          name="topic"
          placeholder="Topic Name"
          value={formData.topic}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Technology">Technology</option>
          <option value="Agriculture">Agriculture</option>
        </select>

        <button type="submit">Add Topic</button>

      </form>

      <h3>Available Topics</h3>

      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {topics.map((item, index) => (
            <tr key={index}>
              <td>{item.topic}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Topic;
