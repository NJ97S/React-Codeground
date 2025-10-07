import useJazzyNews from "../hooks/useJazzyNews";
import Post from "./Post";

const NewsFeed = () => {
  const posts = useJazzyNews();

  return (
    <>
      <h1>{posts.length} articles</h1>

      {posts.map((post, idx) => (
        <Post key={idx} />
      ))}
    </>
  );
};

export default NewsFeed;
