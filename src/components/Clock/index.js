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
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const timeOptions = {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <button id="clock">
      {`${time.toLocaleDateString("en-US", dateOptions)} at ${time.toLocaleTimeString("en-US", timeOptions)}`}
    </button>
  );
};

export default Clock;
