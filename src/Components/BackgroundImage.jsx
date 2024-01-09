import React from "react";

const BackgroundImage = () => {
  const backgroundImageUrl = "url('/vapor.png')";
  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: "0.33",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  return <div style={backgroundStyle}></div>;
};

export default BackgroundImage;
