import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          userName={post.userName}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
      {/* headers */}

      {/* posts */}
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default App;
