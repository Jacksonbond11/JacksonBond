import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import Projects from "./pages/Projects.js";
import NoPage from "./pages/NoPage.js";
import About from "./pages/About.js";
import Saccharine from "./pages/Saccharine.js";
import Audiochain from "./pages/blog/posts/Audiochain.js";
import SelfPacedDegree from "./pages/blog/posts/SelfPacedDegree.js";
import Stats from "./pages/Stats.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="saccharine" element={<Saccharine />} />
        <Route path="blog/post/audiochain" element={<Audiochain />} />
        <Route path="blog/post/selfpaceddegree" element={<SelfPacedDegree />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
