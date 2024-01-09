import React from "react";
import BackgroundImage from "./BackgroundImage";
import Stats from "./Stats";

const MainPage = () => {
  return (
    <div>
      <BackgroundImage />
      <section className="flex flex-col items-center justify-center min-h-[80vh] relative">
        <div className="text-center">
          <h1 className="text-7xl">Jackson Bond</h1>
          <p>Software Developer - Software Quality Analyst</p>
        </div>
      </section>
      {/* <div className="mb-96">
        <Stats />
      </div> */}
    </div>
  );
};

export default MainPage;
