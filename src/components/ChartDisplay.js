import React from 'react';

const ChartDisplay = ({ chartUrl, onGenerateChart }) => {
  return (
    <div className="mt-4">
      <button
        onClick={onGenerateChart}
        className="bg-green-500 text-white px-4 py-2"
      >
        Generate Chart
      </button>
      {chartUrl && <img src={chartUrl} alt="Progress Chart" className="mt-4" />}
    </div>
  );
};

export default ChartDisplay;
