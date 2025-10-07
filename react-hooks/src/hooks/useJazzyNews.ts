import { useEffect, useState } from "react";

const useJazzyNews = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((allPosts) => [post, ...allPosts]);
  };

  useEffect(() => {
    console.log("subscribe news feed");

    return () => console.log("unsubscribe news feed");
  }, []);

  return posts;
};

export default useJazzyNews;
