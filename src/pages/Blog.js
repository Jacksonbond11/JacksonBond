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
      <div className="max-w-lg m-auto text-lg my-6">
        <p >I am making the blog for a couple of reasons. AI makes it super easy to get a task done, but I have noticed a worrying trend.
          I will use it and feel like I am learning, but then the next time I face the same issue, I cannot recall the solution.
        </p>
        <p className="my-4">
          I want to force myself to create a blog post each time I use AI to accomplish something so that I might retain some of the information into my brain.
        </p>
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
