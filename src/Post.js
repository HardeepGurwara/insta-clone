import { Avatar, useFormControl } from "@material-ui/core";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Post.css";
function Post({ postId, user, userName, imageUrl, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);
  console.log(user);
  const postComment = (e) => {
    e.preventDefault();
    if (user) {
      db.collection("posts").doc(postId).collection("comments").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        text: comment,
        userName: user?.displayName,
      });
      setComment("");
    } else {
      alert("Login to comment");
    }
  };

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

      <div className="post__comments">
        {comments.map((comment) => (
          <p className="post__comment">
            <strong>{comment.userName}</strong> {comment.text}
          </p>
        ))}
      </div>
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
