import React, { useRef, useEffect } from "react";
import Header from "../Components/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row justify-apart h-[50vh]">
        <div className="flex-1 m-auto align-middle text-center items-center">
          <h1 className="md:text-[100px] text-6xl my-4 font-bold flex-1">JACKSON BOND</h1>
        </div>
        <div className="border-black border-2 md:border-t-0 flex-1 flex flex-col justify-center items-center h-full">
          <p className="text-[25px] my-4 text-center">
            Software Developer // Software Development Engineer in Test.
          </p>
          <p className="text-[25px] my-4 text-center">
            I love to create and learn new things.
          </p>
        </div>
      </div>
      <div className=" flex justify-center m-6">
        <h2 className=" text-3xl">Some of my projects</h2>
      </div>

      {/* //project 1 */}
      <div className="flex flex-col md:flex-row justify-apart ">
        <div className="flex flex-col  border-black border-2 md:max-w-[50vw] text-center p-2 pb-6 md:ml-1 md:mr-1">
          <h1 className="text-[60px] my-4 font-bold flex-1">Somatika Tattoo</h1>
          <div className="flex justify-center ">
            <div className="relative w-3/4 group cursor-pointer">
              <div
                className="absolute border-2 border-black group-hover:bg-accent bg-primary"
                style={{
                  top: "12px",
                  left: "-12px",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <a href="https://somatikatattoo.infacto.digital/">
                <img src="/somatika.jpg" className="w-full relative" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col  border-black border-2 md:max-w-[50vw] border-t-0 md:border-t-2 text-center p-2 pb-6 md:ml-1 md:mr-1">
          <h1 className="text-[60px] my-4 font-bold flex-1">
            saccharine streetwear
          </h1>
          <div className="flex justify-center ">
            <div className="relative w-3/4 group cursor-pointer">
              <div
                className="absolute border-2 border-black group-hover:bg-accent bg-primary"
                style={{
                  top: "12px",
                  left: "-12px",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <a href="https://saccharine.shop/">
                <img src="/saccharine.jpg" className="w-full relative" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="/projects">
        <div className="border-black border-2 border-t-0 md:ml-1 md:mr-1 text-center hover:bg-primary hover:cursor-pointer mb-20">
          <p className="text-[25px]">View more projects</p>
        </div>
      </a>

      <div className="text-center m-6 align-middle">
        <h2 className=" text-3xl">Some of my links</h2>
        <div className="">
          <ul>
            <a href="https://github.com/JacksonBond11">
              <li className="border-2 border-transparent hover:border-black hover:bg-accent">
                Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/jacksonbond1/">
              <li className="border-2 border-transparent hover:border-black  hover:bg-accent">
                Linkedin
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
