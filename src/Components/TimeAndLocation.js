import React from "react";

function TimeAndLocation({ weather: { name } }) {
  return (
    <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font">{name}</p>
    </div>
  );
}

export default TimeAndLocation;
