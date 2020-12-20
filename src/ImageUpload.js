import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ImageUpload.css";
import { storage, db } from "./firebase";
import firebase from "firebase";
function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  console.log(username);
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state__changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },

      (error) => {
        console.log(error);
        alert(error.message);
      },

      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              userName: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };
  return (
    <div className="imageUpload">
      <progress className="imageUpload__progress" value={progress} max="100" />
      <input
        type="text"
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter a caption"
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}> Upload</Button>
    </div>
  );
}

export default ImageUpload;
