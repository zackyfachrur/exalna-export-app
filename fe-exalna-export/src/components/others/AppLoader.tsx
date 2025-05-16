// src/components/loading/AppLoader.tsx
import React, { useEffect, useState } from "react";

const AppLoader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onDone(), 300); 
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <p className="mb-4 text-lg font-medium text-gray-700">
        Preparing Application... {progress}%
      </p>
      <div className="w-72 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default AppLoader;
