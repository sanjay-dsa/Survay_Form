// src/pages/Results.jsx

import React, { useEffect, useState } from "react";

const Results = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("surveyResponses")) || [];
    setResponses(data);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Survey Results</h2>

      {responses.length === 0 ? (
        <p>No survey responses found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
