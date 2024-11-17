import React from 'react';

const ProgressList = ({ logs }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Progress Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log._id} className="border-b p-2">
            <strong>{log.topic}</strong>: {log.timeSpent} hours ({log.notes})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressList;
