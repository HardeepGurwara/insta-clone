import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
function Post({ username }) {
  return (
    <div className="post">
      <h3>Username</h3>
      <Avatar className="post__avatar" alt={username} />
      <img
        className="post__image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/React_Girls_Berlin.png/673px-React_Girls_Berlin.png"
        alt=""
      />

      <h4 className="post__text">
        <strong>Hardeep:</strong> Day two of insta clone
      </h4>
    </div>
  );
}

export default Post;
