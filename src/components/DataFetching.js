import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => (
        <div className="card">
          <div
            className="map"
            style={{ backgroundImage: "url(./Picture/Captured.PNG)" }}
          ></div>
          <h1 className="apple">{post.title}</h1>
          <div className="age">{post.body}</div>
          <div className="read"> Read more</div>
        </div>
      ))}
    </div>
  );
}

export default DataFetching;
