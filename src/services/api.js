import axios from "axios";

export const fetchLogs = async () => {
  try {
    const response = await axios.get("/log");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch logs:", error);
    throw error;
  }
};

export const addLog = async (formData) => {
  try {
    const response = await axios.post("/log", formData);
    return response.data;
  } catch (error) {
    console.error("Failed to add log:", error);
    throw error;
  }
};

export const generateChart = async () => {
  try {
    const response = await axios.get("/chart");
    return response.data.url;
  } catch (error) {
    console.error("Failed to generate chart:", error);
    throw error;
  }
};
