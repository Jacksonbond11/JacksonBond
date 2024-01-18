import React from "react";

const BackgroundImage = () => {
  //   const backgroundImageUrl = "url('/vapor.png'),url(/dark-vapor.png)";
  const backgroundStyle = {
    backgroundImage: `url('/vapor.png'), url('/secondary-background.png')`,
    backgroundSize: "cover, cover",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    opacity: "0.33",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    minHeight: "100%",
  };

  return <div style={backgroundStyle}></div>;
};

export default BackgroundImage;
