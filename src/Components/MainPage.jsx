import React from "react";

const MainPage = () => {
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

  return (
    <div>
      <div style={backgroundStyle}></div>
      <section className="flex flex-col items-center justify-center min-h-full relative">
        <div className="text-center">
          <h1 className="text-7xl">Jackson Bond</h1>
          <p>Software Developer - Software Quality Analyst</p>
        </div>
        <div>Some of my projects</div>
      </section>
    </div>
  );
};

export default MainPage;
