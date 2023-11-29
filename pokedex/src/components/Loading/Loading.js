import React from "react";

const Loading = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="./Loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
