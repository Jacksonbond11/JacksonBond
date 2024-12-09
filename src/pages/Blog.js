import React from "react";
import Header from "../Components/Header";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
import BackgroundImage from "../Components/BackgroundImage";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="text-center ">
        <h1 className="text-4xl my-4">Posts</h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center m-20 min-h-[65vh]">
        <div className="m-4">
          <BlogCard
            link={"post/audiochain"}
            img={"blog/blog-theaudiochain.png"}
            title={"The Audio Chain"}
          />
        </div>

        <div className="m-4">
          <BlogCard
            link={"post/selfpaceddegree"}
            img={"blog/blog-selfpaceddegree.png"}
            title={
              "Earning a Bachelor's of Computer Science in a Self Paced Program"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
