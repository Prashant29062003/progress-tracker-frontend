import React, { useState, useEffect } from 'react';
import ProgressForm from './components/ProgressForm';
import ProgressList from './components/ProgressList';
import ChartDisplay from './components/ChartDisplay';
import { fetchLogs, addLog, generateChart } from './services/api';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [chartUrl, setChartUrl] = useState('');

  useEffect(() => {
    // Fetch progress logs on component mount
    fetchLogs().then((data) => setLogs(data));
  }, []);

  const handleAddLog = async (formData) => {
    try {
      const newLog = await addLog(formData);
      setLogs([...logs, newLog]);
    } catch (error) {
      console.error('Failed to add log:', error);
    }
  };

  const handleGenerateChart = async () => {
    try {
      const url = await generateChart();
      setChartUrl(url);
    } catch (error) {
      console.error('Failed to generate chart:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Progress Tracker</h1>
      
      {/* Form to Add Progress */}
      <ProgressForm onSubmit={handleAddLog} />
      
      {/* Button to Generate Chart */}
      <ChartDisplay chartUrl={chartUrl} onGenerateChart={handleGenerateChart} />
      
      {/* List of Logs */}
      <ProgressList logs={logs} />
    </div>
  );
};

export default App;
