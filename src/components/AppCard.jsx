import React from "react";

const AppCard = ({ children, className }) => {
  return (
    <div
      className={`rounded border-gray-400 bg-white p-4 drop-shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default AppCard;
