import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
      console.log(postJson);
    };
    fetchPosts();
  }, []);

  const blogPostByTemplate = posts.map((post) => {
    return (
      <div className=" flex justify-center">
        <div className="mb-5 bg-gray-100 p-10 rounded-lg max-w-2xl flex flex-col  mt-5">
          <h3 className="font-bold text-lg text-center text-black pb-5 pt-3">
            {post.title}
          </h3>
          <p className="pt-1 text-justify">{post.body}</p>
          <div className="flex items-center justify-between gap-x-4 py-5">
            <div className="flex gap-x-2">
              {post.tags.map((tag, index) => (
                <div
                  key={`tags-${tag}-${index}`}
                  className="px-2 py-1 rounded-md bg-green-500 text-white"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M237 77.47A28 28 0 0 0 216 68h-52V56a44.05 44.05 0 0 0-44-44a12 12 0 0 0-10.73 6.63L72.58 92H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h172a28 28 0 0 0 27.78-24.53l12-96a28 28 0 0 0-6.78-22M36 116h32v80H36Zm184-19.5l-12 96a4 4 0 0 1-4 3.5H92v-89.17l34.82-69.63A20 20 0 0 1 140 56v24a12 12 0 0 0 12 12h64a4 4 0 0 1 4 4.5"
                />
              </svg>
              <span>{post.reactions}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{blogPostByTemplate}</div>;
};

export default Homepage;
