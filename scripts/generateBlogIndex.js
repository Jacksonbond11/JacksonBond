const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, "../public/blogPosts");

const files = fs.readdirSync(blogPath).filter((file) => file.endsWith(".md"));

const index = files.map((file) => ({
    slug: file.replace(".md", ""),
    path: `/blog/post/${file.replace(".md", "")}`,
}));

fs.writeFileSync(
    path.join(__dirname, "../src/blogIndex.json"),
    JSON.stringify(index, null, 2)
)

