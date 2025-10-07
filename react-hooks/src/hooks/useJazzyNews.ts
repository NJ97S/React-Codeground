import { useEffect, useMemo, useState } from "react";

const useJazzyNews = () => {
  const [_posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((allPosts) => [post, ...allPosts]);
  };

  const posts = useMemo(() => _posts, [_posts]);

  useEffect(() => {
    console.log("subscribe news feed");

    return () => console.log("unsubscribe news feed");
  }, []);

  useEffect(() => {
    console.log("posts 바뀐 듯");
  }, [posts]);

  return posts;
};

export default useJazzyNews;
