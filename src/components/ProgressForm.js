import React, { useState } from "react";

const ProgressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    topic: "",
    timeSpent: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ topic: "", timeSpent: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <label>Topic</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="block mb-2 p-2 border"
          required
        />
      </div>
      <div>
        <label>Time Spent (in hours)</label>
        <input
          type="number"
          name="timeSpent"
          value={formData.timeSpent}
          onChange={handleChange}
          className="block mb-2 p-2 border"
          required
        />
      </div>
      <div>
        <label>Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="block mb-2 p-2 border"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Log
      </button>
    </form>
  );
};

export default ProgressForm;
