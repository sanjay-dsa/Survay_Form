import React from "react";

const Dashboard = () => {
  const totalResponses = 50;
  const completedSurveys = 45;
  const pendingSurveys = 5;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Survey Dashboard</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h4>Total Responses</h4>
            <h2>{totalResponses}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-3">
            <h4>Completed Surveys</h4>
            <h2>{completedSurveys}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center p-3">
            <h4>Pending Surveys</h4>
            <h2>{pendingSurveys}</h2>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4>Recent Responses</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>5</td>
            </tr>
            <tr>
              <td>David</td>
              <td>david@gmail.com</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
