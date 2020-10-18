import React from "react";
import { Spin } from "antd";
// import Loading from "../../assets/LiLiaLoading.png";

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
        {/* <img
          src={Loading}
          style={{ width: "128px", opacity: "0.5" }}
          alt="no image"
        /> */}
        <Spin spinning />
      </div>
    </div>
  );
};

export default WeLoading;
