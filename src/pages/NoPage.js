import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
    <p className="text-7xl font-bold">404</p>
    <h1 className="text-3xl mt-4">That page wandered off.</h1>
    <Link className="border-2 border-black px-4 py-2 mt-8 hover:bg-primary" to="/">Back home</Link>
  </div>;
};

export default NoPage;
