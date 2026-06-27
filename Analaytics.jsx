import React, { useEffect, useState } from "react";

const Analytics = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("surveys")) || [];
    setSurveys(data);
  }, []);

  const totalResponses = surveys.length;

  const averageRating =
    totalResponses > 0
      ? (
          surveys.reduce(
            (sum, item) => sum + Number(item.rating || 0),
            0
          ) / totalResponses
        ).toFixed(1)
      : 0;

  const genderCount = surveys.reduce((acc, item) => {
    const gender = item.gender || "Unknown";
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Survey Analytics Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#4CAF50",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{totalResponses}</h2>
          <p>Total Responses</p>
        </div>

        <div
          style={{
            background: "#2196F3",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{averageRating}</h2>
          <p>Average Rating</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Gender Distribution</h2>

        {Object.keys(genderCount).length === 0 ? (
          <p>No survey data available.</p>
        ) : (
          <ul>
            {Object.entries(genderCount).map(([gender, count]) => (
              <li key={gender}>
                {gender}: {count}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Recent Responses</h2>

        {surveys.length === 0 ? (
          <p>No responses found.</p>
        ) : (
          <table
            border="1"
            cellPadding="10"
            width="100%"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>
              {surveys.map((survey, index) => (
                <tr key={index}>
                  <td>{survey.name}</td>
                  <td>{survey.gender}</td>
                  <td>{survey.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Analytics;
