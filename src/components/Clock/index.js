import React, { useState, useEffect } from "react";
import "./styles.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    // Cleanup on dismount.
    return () => clearTimeout(timeout);
  });

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const timeOptions = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  };

  return (
    <div className="flex" id="clock">
      {time.toLocaleDateString('en-US', dateOptions).toLowerCase()}
      &nbsp;
      {time.toLocaleTimeString('en-US', timeOptions)}
    </div>
  );
};

export default Clock;
