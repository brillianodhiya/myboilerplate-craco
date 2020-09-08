import React from "react";
import { Spin } from "antd";

const WeLoading = () => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.5)",
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <div
        style={{
          top: "50%",
          left: "50%",
          position: "fixed",
          zIndex: 1,
        }}
      >
        {/* <img src={Loading} alt="no image" /> */}
        <Spin spinning />
      </div>
    </div>
  );
};

export default WeLoading;
