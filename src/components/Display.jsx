import React from "react";

const Display = ({ input }) => {
  return <h1 className="display">{input || 0}</h1>;
};

export default Display;
