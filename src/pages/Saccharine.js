import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Saccharine = () => {
  const navigate = () => {
    window.open("https://www.jacksonbond.dev", "_blank");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center py-4">
        <div className="text-center">
          <h1 className="text-4xl my-4">saccharine</h1>
          <h1 className="text-2xl my-4">A streetwear brand.</h1>
          <div className="flex flex-col p-4">
            <img
              src="saccharine1.png"
              className=" object-cover w-full h-96 cursor-pointer p-4"
            />
            <img
              src="saccharine2.png"
              className=" object-cover w-full h-96 cursor-pointer p-4"
            />
          </div>
          <h2>View the store (coming soon)</h2>
          <button className="btn text-xl" onClick={navigate}>
            saccharine
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Saccharine;
