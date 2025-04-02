import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // optional

function MarkdownPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/blogPosts/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <div className="markdown-post">
      <h1>{slug.replace(/-/g, " ")}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPost;
