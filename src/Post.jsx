import { useEffect, useState } from "react";

export const Post = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log("Fetched posts:", data);
      });
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
