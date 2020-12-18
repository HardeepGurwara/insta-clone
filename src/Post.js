import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
function Post({ userName, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={userName} />
        <h3>{userName}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{userName}:</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
