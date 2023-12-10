import { useNavigate } from "react-router-dom";

const BlogPost = ({ title, body }) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const navigateBlog = () => {
    navigate("/blog");
  };

  return (
    <div>
      <div className="text-sm breadcrumbs p-4">
        <ul>
          <li onClick={navigateHome}>
            <a>Home</a>
          </li>
          <li onClick={navigateBlog}>
            <a>Blog</a>
          </li>
          <li>{title}</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <div className="text-center">
          <h1 className="text-4xl my-4">{title}</h1>
        </div>
        <div className="w-2/3">
          {" "}
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
