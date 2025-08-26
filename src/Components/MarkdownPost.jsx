import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // optional
import Header from "./Header";
import blogIndex from "../blogIndex.json";

function MarkdownPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleSetPost();
    fetch(`/blogPosts/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  const handleSetPost = () => {
    setPost(blogIndex.find((p) => p.slug == slug));
    console.log(blogIndex.find((p) => p.slug == slug))
  };
  const navigateHome = () => {
    navigate("/");
  };
  const navigateBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="markdown-post">
      <Header />
      <div className="text-sm breadcrumbs p-4">
        <ul>
          <li onClick={navigateHome}>
            <a>Home</a>
          </li>
          <li onClick={navigateBlog}>
            <a>Blog</a>
          </li>
          <li>{post && post.title}</li>
        </ul>
      </div>
      <div className="flex flex-col m-auto w-[60vw]">
        <h1>{post && post.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownPost;
