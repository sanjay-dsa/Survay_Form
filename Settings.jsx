import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    appName: "Survey Management System",
    adminName: "Admin",
    adminEmail: "admin@example.com",
    surveyStatus: true,
    allowMultipleResponses: false,
    theme: "light",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem("surveySettings");

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "surveySettings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully!");
  };

  const handleReset = () => {
    const defaultSettings = {
      appName: "Survey Management System",
      adminName: "Admin",
      adminEmail: "admin@example.com",
      surveyStatus: true,
      allowMultipleResponses: false,
      theme: "light",
      startDate: "",
      endDate: "",
    };

    setSettings(defaultSettings);
    localStorage.setItem(
      "surveySettings",
      JSON.stringify(defaultSettings)
    );

    alert("Settings reset successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Application Settings</h2>

      <div className="settings-card">

        <label>Application Name</label>
        <input
          type="text"
          name="appName"
          value={settings.appName}
          onChange={handleChange}
        />

        <label>Admin Name</label>
        <input
          type="text"
          name="adminName"
          value={settings.adminName}
          onChange={handleChange}
        />

        <label>Admin Email</label>
        <input
          type="email"
          name="adminEmail"
          value={settings.adminEmail}
          onChange={handleChange}
        />

        <label>Survey Start Date</label>
        <input
          type="date"
          name="startDate"
          value={settings.startDate}
          onChange={handleChange}
        />

        <label>Survey End Date</label>
        <input
          type="date"
          name="endDate"
          value={settings.endDate}
          onChange={handleChange}
        />

        <label>Theme</label>
        <select
          name="theme"
          value={settings.theme}
          onChange={handleChange}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="surveyStatus"
              checked={settings.surveyStatus}
              onChange={handleChange}
            />
            Enable Survey
          </label>

          <label>
            <input
              type="checkbox"
              name="allowMultipleResponses"
              checked={settings.allowMultipleResponses}
              onChange={handleChange}
            />
            Allow Multiple Responses
          </label>
        </div>

        <div className="button-group">
          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Settings
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
