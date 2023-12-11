import React from "react";
import BlogPost from "../../../Components/BlogPost";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const SelfPacedDegree = () => {
  return (
    <div>
      <Header />
      <BlogPost
        title={
          "Earning a Bachelor's of Computer Science in a Self Paced Program"
        }
        body={"Was it worth it?"}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default SelfPacedDegree;
