import React from "react";
import BlogCard from "../Components/BlogCard";
import blogIndex from "../blogIndex.json";

const Blog = () => {
  return (
    <div className="page-wrap page-section">
      <div className="page-intro blog-intro">
        <p className="eyebrow">Field notes</p>
        <h1>Things I am <em>figuring out.</em></h1>
        <p>Notes on software, systems, and the lessons that stick better when I explain them to someone else.</p>
      </div>
      <div className="blog-grid">
        <div>
          <BlogCard
            link={"post/audiochain"}
            img={"/blog/blog-theaudiochain.png"}
            title={"The Audio Chain"}
            tags={["music"]}
            />
        </div>

        <div>
          <BlogCard
            link={"post/selfpaceddegree"}
            img={"/blog/blog-selfpaceddegree.png"}
            title={
              "Earning a Bachelor's of Computer Science in a Self Paced Program"
            }
            tags={["education"]}
          />
        </div>

        {blogIndex.map((post) => {
          return (
            <div key={post.slug}>
              <BlogCard link={post.path} img={post.img} title={post.title} tags={post.tags} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
